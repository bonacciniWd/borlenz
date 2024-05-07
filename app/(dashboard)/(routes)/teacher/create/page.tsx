"use client"

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,

} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { title } from "process";
import Link from "next/link";
import toast from "react-hot-toast";

const formSchema = z.object({
    title: z.string().min(1, {
         message: "O Titulo é necessário"
         }),
});



const CreatePage = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/courses", values);
            router.push(`/teacher/courses/${response.data.id}`);
            toast.success("Curso criado com sucesso!");
        } catch {
            toast.error("Algo deu errado!");
        }
    }

    return (
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
            <div>
                <h1 className="text-2xl ">
                    Dê um nome ao seu curso!
                </h1>  
                <p className="text-sm text-slate-600 ">
                    Como você gostaria de chamar o seu curso? <br/> "Você poderá alterar isso depois."
                </p>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mt-8"
                    >
                        <FormField 
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Nome do Curso
                                    </FormLabel>

                                    <FormControl>
                                        <Input 
                                            disabled={isSubmitting}
                                            placeholder="Exemplo 'Adobe Photoshop ABC Tutorial'"
                                            {...field}   
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        O que você ensina neste curso?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> 
                        <div className="flex items-center gap-x-2">
                            <Link href="/">
                                <Button
                                    type="button"
                                    variant="outline"
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                variant="destructive"
                            >
                                Continuar
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
      );
}
 
export default CreatePage;