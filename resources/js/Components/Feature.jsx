import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Feature({ feature, answer, children }) {

    const { auth } = usePage().props;
    const availableCredits = auth.user.available_credits;

    return (
         <AuthenticatedLayout
            header={
                <h2 className="text-xl text-center md:text-left font-semibold leading-tight">
                    {feature.name}
                </h2>
            }
        >
            <Head title={feature.name} />

            <div className="px-8">

                <div className="overflow-hiden shadown-sm sm:rounded-lg relative">
                    {availableCredits !== null && feature.required_credits > availableCredits && (
                        <div className="absolute left-0 top-0 right-0 bottom-0 z-20 
                        flex flex-col items-center justify-center bg-white/80 gap-3 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <div>
                                Você não tem créditos suficiente para essa funcionalidade. {' '}
                                <Link 
                                    href={route('credit.index')}
                                    className="underline"    
                                    >
                                        Comprar mais créditos
                                </Link>
                            </div>
                        </div>
                    )}
                

                <div className="mx-auto mx-auto max-w-7xl sm:px-6 lg:px-8 p-4 text-gray-400 border-b pb-4 flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center dark:bg-gray-700">
                    <p className="sm:mr-3">{feature.description}</p>
                    <p className="text-sm italic text-right">
                        Requer {feature.required_credits} crédito
                    </p>
                </div>    

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 dark:bg-gray-800">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {children}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}