'use client';

import {useLocale, useTranslations} from 'next-intl';
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
    const t = useTranslations('switcher');
    return (
        <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending} className="minimal">
            <option value='es'>{t('espanish')}</option>
            <option value='en'>{t('ingles')}</option>
        </select>
    );
}