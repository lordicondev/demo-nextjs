'use server';

/** A stand-in for signing someone up: a mailing list, a database. */
export async function subscribe(formData: FormData): Promise<string> {
    const email = String(formData.get('email') ?? '');
    return `Subscribed: ${email}`;
}
