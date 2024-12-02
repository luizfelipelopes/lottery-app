import { PackagePricingCards } from "@/Components/PackagePricingCards";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Index({ packages }) {
    
    const { auth } = usePage().props;
    const available_credits = auth.user.available_credits;
    
    return(

        <AuthenticatedLayout
            header={<h2 className="font-semibold text-x1 leading-tight">Seus Créditos</h2>}
        
        >

            <Head title="Seus Créditos" />

            <div className="overflow-hidden shadow-sm sm:rounded-lg relative">
                <div className="flex flex-col gap-3 items-center p-4">
                    <img 
                        src="/img/coin.png"
                        alt=""
                        className="w-[100px]"
                    />
                    <h3 className="text-2x1">
                        Você possui {available_credits} créditos.
                    </h3>
                </div>
            </div>
            <PackagePricingCards packages={packages.data}/>    
            

        </AuthenticatedLayout>


    );
}