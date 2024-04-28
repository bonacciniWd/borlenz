import Image from "next/image";

export const Logo = () => {
    return (
        <Image 
            height={130}
            width={190}
            alt="logo"
            src="/logo.svg"
            style={{ borderRadius: '5px 50px 50px 85px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.05)' }}
        />
    )
}