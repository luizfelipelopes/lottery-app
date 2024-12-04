import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('feature_random_numbers.index')}
                                    active={route().current('feature_random_numbers.index')}
                                >
                                    Números Aleatórios
                                </NavLink>
                                <NavLink
                                        href={route('historic')}
                                        active={route().current('historic')}
                                    >
                                        Resultados
                                </NavLink>
                            </div>
                        </div>

                        <div className='flex flex-wrap flex-center justify-center md:justify-end items-center sm:hidden'>
                            <span className='flex gap-3 mr-2 sm:mr-3'>
                                <img 
                                    src='/img/coin.png'
                                    className='w-[20px]'
                                    alt=''
                                />
                                {user.available_credits} Créditos
                            </span>

                            <Link
                                href={route('credit.index')}
                                className='border rounded px-3 py-1
                                hover:bg-gray-500 hover:text-white
                                transition-colors'
                            >
                                Comprar Créditos
                            </Link>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">

                            <div className='flex flex-wrap flex-center justify-center md:justify-end items-center'>
                                <span className='flex gap-3 mr-3'>
                                    <img 
                                        src='/img/coin.png'
                                        className='w-[20px]'
                                        alt=''
                                    />
                                    {user.available_credits} Créditos
                                </span>

                                <Link
                                    href={route('credit.index')}
                                    className='border rounded px-3 py-1
                                    hover:bg-gray-500 hover:text-white
                                    transition-colors'
                                >
                                    Comprar Créditos
                                </Link>
                            </div>

                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Sair
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2  transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <NavLink
                                href={route('feature_random_numbers.index')}
                                active={route().current('feature_random_numbers.index')}
                            >
                                Números Aleatórios
                        </NavLink>
                        <NavLink
                                href={route('historic')}
                                active={route().current('historic')}
                            >
                                Resultados
                        </NavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className=" space-y-1">
                            <ResponsiveNavLink href={route('feature_random_numbers.index')}>
                                Números Aleatórios
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route('historic')}>
                                Resultados
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Sair
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
