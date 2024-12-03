import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Historic({ usedFeatures }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight">
                    Resultados
                </h2>
            }
        >
            <Head title="Resultados" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                                            Funcionalidade
                                        </th>
                                        <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                                            Créditos
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Data
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Resultados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usedFeatures.data.map((usedFeature) => (
                                        <tr key={usedFeature.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="hidden sm:table-cell px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {usedFeature.feature.name}
                                            </td>
                                            <td scope="row" className="px-6 py-4 hidden sm:table-cell">
                                                {usedFeature.credits}
                                            </td>
                                            <td scope="row" className="px-6 py-4">
                                                {usedFeature.created_at}
                                            </td>
                                            <td scope="row" className="px-6 py-4">
                                                {JSON.stringify(usedFeature.data) }
                                            </td>
                                        </tr>
                                    ))}
                                    {!usedFeatures.data.length && (
                                        <tr>
                                            <td colSpan="4"
                                            className='text-center p-8'>
                                                Você não gerou nenhum jogo ainda.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
