import Feature from "@/Components/Feature";
import { useForm } from "@inertiajs/react";

export default function Index({ feature, answer }) {

    const { get, reset } = useForm({});

    const generateNumbers = () => {
        
        get(route('feature_random_numbers.generate_numbers'), {
            onSuccess() {
                reset();
            }
        })
    }

    return (
        <Feature feature={feature} answer={answer}>
            <div className="content-center">
                <h2 className="text-center text-xl font-bold mb-3">{feature.description}</h2>

                <div className="w-full flex py-4">
                    <button
                        className='rounded px-3 py-1
                        hover:bg-indigo-700 hover:text-white
                        transition-colors m-auto
                        bg-sky-500/75 text-white mb-3'
                        onClick={ () => generateNumbers() }
                    >
                        Gerar Jogo
                    </button>
                </div>

                <div className="flex flex-wrap justify-center">

                    {!answer 
                    && (
                        <>
                            <span className="bg-indigo-400 text-white p-6 mb-3 mr-3 rounded text-lg font-bold">?</span>
                            <span className="bg-indigo-400 text-white p-6 mb-3 mr-3 rounded text-lg font-bold">?</span>
                            <span className="bg-indigo-400 text-white p-6 mb-3 mr-3 rounded text-lg font-bold">?</span>
                            <span className="bg-indigo-400 text-white p-6 mb-3 mr-3 rounded text-lg font-bold">?</span>
                            <span className="bg-indigo-400 text-white p-6 mb-3 mr-3 rounded text-lg font-bold">?</span>
                            <span className="bg-indigo-400 text-white p-6 mb-3 mr-3 rounded text-lg font-bold">?</span>
                        </>
                    )}

                    { answer && answer.map((number) => 
                        <span key={number} className="bg-indigo-400 text-white mb-3 mr-3 p-6 rounded text-lg font-bold">{number}</span>
                    )}
                    
                </div>
            </div>

        </Feature>
    );
}