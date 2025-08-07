import { Roboto } from 'next/font/google';

const robotoBold = Roboto({ weight: '700', subsets: ['latin'] });
const robotoRegular = Roboto({ weight: '400', subsets: ['latin'] });

export default function NotFound() {
    const emojis = [
      { emoji: '😕', top: '10%', left: '15%' },
      { emoji: '😢', top: '20%', left: '70%' },
      { emoji: '🥺', top: '75%', left: '80%' },
      { emoji: '😔', top: '85%', left: '10%' },
      { emoji: '😕', top: '55%', left: '65%' },
      { emoji: '😢', top: '40%', left: '25%' },
    ];

    const image = "/images/computador-quebrado.png"; 

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #FFD6E0 0%, #FFFACD 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <img
                src={image}
                alt="Computador quebrado"
                style={{
                    width: '180px',
                    marginBottom: '1.5rem',
                    zIndex: 1,
                }}
            />
            {emojis.map((item, idx) => (
                <span
                    key={idx}
                    style={{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        fontSize: '2.5rem',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        opacity: 0.7,
                    }}
                >
                    {item.emoji}
                </span>
            ))}
            <h1
                className={robotoBold.className}
                style={{
                    fontSize: '6rem',
                    color: '#E75480',
                    margin: 0,
                    textShadow: '0 6px 12px rgba(16, 6, 9, 0.25)',
                }}
            >
                Erro 404
            </h1>
            <p
                className={robotoRegular.className}
                style={{
                    fontSize: '1.0rem',
                    color: '#E75480',
                    marginTop: '2rem',
                    textAlign: 'center',
                    maxWidth: '500px',
                }}
            >
                Poxa! O caminho que você tentou acessar não existe. Por favor, verifique o endereço e tente novamente. 
            </p>
            <a
                href="/"
                style={{
                    marginTop: '2.5rem',
                    padding: '0.75rem 2rem',
                    background: '#E75480',
                    color: '#fff',
                    borderRadius: '2rem',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    boxShadow: '0 2px 8px rgba(16, 6, 9, 0.15)',
                    transition: 'background 0.2s',
                    display: 'inline-block',
                }}
                className={robotoBold.className}
            >
                OK! Voltar para a página inicial
            </a>
        </div>
    );
}