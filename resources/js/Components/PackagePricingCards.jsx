import { usePage } from "@inertiajs/react";

export function PackagePricingCards({ packages }) {

    const { csrf_token } = usePage().props;

    return(
        <section className="pb-8">
            <div className="py-8 px-4">
                <div className="text-center mb-8">
                    <h2 className="mb-4 text-4x1 font-extrabold">
                        1 Credito Equivale a 1 Jogo de 6 Números.
                    </h2>
                    <h2 className="mb-4 text-4x1 font-extrabold">
                        Quanto mais créditos você escolher, mais números aleatórios serão gerados.
                    </h2>
                </div>
            </div>
            <div className="px-10 lg:grid lg:grid-cols-3 
                sm:gap-6 xl:gap-10 lg:space-y-0">
                {packages.map((p) => (
                    <div
                        key={p.id}
                        className="flex flex-col align-stretch p-6 mx-auto 
                        lg:mx-0 max-w-lg text-center rounded-lg
                        border shadow border-gray-600 mb-6 min-h-full
                        "
                    >
                        <h3 className="mb-4 text-2xl font-semibold">
                            {p.name}
                        </h3>
                        <div className="flex flex-wrap justify-center 
                        items-baseline my-8">
                            <span className="mr-2 text-5xl 
                            font-extrabold">
                                R${p.price}
                            </span>
                            <span >/{p.credits} créditos</span>
                        </div>

                        <form
                            action={route('credit.buy', p)}
                            method="post"
                            className="w-full"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf_token}
                                    autoComplete="off"
                                >
                                </input>
                                <button className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    Comprar Créditos
                                </button>

                        </form>
                    </div>
                ))}
            </div>
        </section>
    );
}