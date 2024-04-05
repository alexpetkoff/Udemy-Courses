'use client'

import { useFormStatus } from 'react-dom'

export function MealsForSubmit() {
    const { pending } = useFormStatus();
    return <button disabled={pending}>{pending ? 'Submitting...' : 'Share meal'}</button>
}