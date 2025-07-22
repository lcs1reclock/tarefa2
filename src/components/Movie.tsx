
// Defino a interface para os dados do filme
interface Filmes {
    id: string;
    titulo: string;
    ano: number;
    imagem: string;
    descricao: string;
}

// declaração do Componente MovieCard
function MovieCard({
    id,
    titulo,
    ano,
    imagem,
    descricao
}: Filmes) {
    return (
        <div className="card rounded">
            {/* Imagem do filme */}
            <img
                src={imagem}
            />
            <div className="p-4">
                <div>
                    {/* Título do filme */}
                    <h5 className="card-title text-xl font-semibold mb-2 text-gray-800">
                        {titulo}
                    </h5>
                    
                    {/* Ano do filme */}
                    <h6 className="card-subtitle mb-2 text-muted text-sm">
                        {ano}
                    </h6>

                    {/* Descrição do filme */}
                    <p className="card-text text-gray-600 text-sm">
                        {descricao}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;