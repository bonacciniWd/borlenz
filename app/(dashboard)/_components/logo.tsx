import Image from "next/image";

export const Logo = () => {
    return (
        <Image 
            height={130}
            width={190}
            alt="logo"
            src="/logo.svg"
            style={{ borderRadius: '10px' }}
        />
    )
}