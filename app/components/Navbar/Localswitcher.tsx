'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <label className='border-2 rounded'>
        <p className='sr-only'>change language</p>
        <select
            defaultValue={localActive}
            className="form-select"
            onChange={onSelectChange}
            disabled={isPending}
            style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '5px',
                boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)'
            }}
        >
            <option value='es'>Español</option>
            <option value='en'>English</option>
            </select>
        </label>
    );
}