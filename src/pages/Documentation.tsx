export default function Documentation() {
    return (
        <div className="max-w-5xl mx-auto p-6">

            <h1 className="text-3xl mb-6 text-center font-bold">
                Comando SELECT
            </h1>

            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 space-y-4">
                <p>
                    O comando <strong>SELECT</strong> é utilizado para recuperar (consultar) dados
                    armazenados em um banco de dados. Com ele, é possível acessar informações
                    presentes em objetos como <strong>tabelas</strong>, <strong>views</strong> e,
                    em alguns sistemas de banco de dados, <strong>stored procedures</strong> que
                    retornam resultados.
                </p>

                <p>
                    Esse comando é um dos mais importantes da linguagem SQL, pois permite
                    visualizar e analisar os dados registrados no banco sem realizar alterações
                    neles.
                </p>

                <p>
                    A forma mais simples de utilizar o comando SELECT é por meio de sua
                    sintaxe básica, apresentada a seguir:

                    <p className="text-blue-600">SELECT <span className="text-green-600">coluna</span> FROM <span className="text-green-600">tabela</span> <span className="text-black">é utilizado para exibir os dados da coluna desejada e tabela especifica.</span></p>
                    <p className="text-blue-600">SELECT <span className="text-green-600">*</span> FROM <span className="text-green-600">tabela</span> <span className="text-black">é utilizado para exibir os dados de todas as coluna e tabela especifica.</span></p>
                </p>

            </div>

            <div className="flex justify-center">
                <img
                    src="https://i.postimg.cc/cH4rpFjD/Captura-de-tela-2026-04-09-122725.png"
                    alt="Tutorial SQL Select"
                    className="mt-4 rounded-xl shadow-lg max-w-full"
                />

            </div>

        </div>
    );
}