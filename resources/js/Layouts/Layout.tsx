import { Transition } from '@headlessui/react';
import React, { PropsWithChildren } from 'react'
import { resolveValue, Toaster, ToastIcon } from 'react-hot-toast';


const TailwindToaster = () => {
    return (
        <Toaster position="top-right">
            {(t) => (
                <Transition
                    appear
                    show={t.visible}
                    // className="transform p-4 flex bg-white rounded shadow-lg"
                    enter="transition-all duration-150"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition-all duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                >
                    <ToastIcon toast={t} />
                    <p className="px-2">{resolveValue(t.message, t)}</p>
                </Transition>
            )}
        </Toaster>
    );
};

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <Toaster />
        </>
    )
}
