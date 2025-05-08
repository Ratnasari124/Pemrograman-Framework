type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
    return (
        <a className="text-black transition hover:text-teal-500" href={url}>
            {text}
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="pt-10 px-8 pb-16 border-t">
            <div className="flex justify-between gap-6">
                {/* Menambahkan text-black agar semua teks di dalam div ini berwarna hitam */}
                <div className="flex gap-6 text-sm font-medium text-black">
                    <FooterLink text="Tentang Saya" url="/" />
                    <FooterLink text="Proyek" url="/projects" />
                    <FooterLink text="Esai" url="/essays" />
                </div>
                <p className="text-sm text-zinc-400">© Ratnasari. All rights reserved.</p>
            </div>
        </footer>
    );
}
