export default function HomePage() {
    return (
        <div>
            <h1 className="font-quicksand font-bold">
                Título com Quicksand (negrito)
            </h1>
            <p className="font-quicksand font-normal">
                Texto com Quicksand (regular)
            </p>
            <h2 style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}>
                Título em negrito
            </h2>
        </div>
    );
}