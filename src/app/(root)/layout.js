import Path from "@/components/Path";


export default function HomeLayout({children}){
    return (
        <main>
            <Path />
            {children}
        </main>
    )
}
