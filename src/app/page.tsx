"use client";
import mock from '@/utils/mock'

export default function Home() {
    return (
        <>
            <section className=''>
                <div className='flex justify-between items-center z-20'>
                    <div className='ml-8'>
                        <h1 className='flex-1 text-5xl ml-6 text-red-400'>Welcome</h1>
                        <br></br>
                        <h2 className='flex-1 text-3xl ml-6'>Óculos para todos os estilos de gatos</h2>
                    </div>
                    <img className='w-1/2 h-1/2' src='/background.png' />
                </div>
            </section>
            <section className=''>
                <div className="inline-grid grid-cols-3 relative justify-items-center overflow-hidden bg-cover bg-no-repeat py-40">
                    {mock.imagesCards.map((images, index) => (
                        <div key={index} className="relative transition opacity-95 duration-700 ease-in-out hover:scale-110 outline-8 hover:opacity-100">
                            <img className="h-96 w-11/12 rounded-2xl bg-red-400" src={images.url} alt={`Image ${index}`} />
                            <div className='absolute py-40 bottom-0 w-11/12 rounded-b-2xl bg-gradient-to-t from-red-400 opacity-95 '>
                                <h2 className="px-4 text-start text-2xl text-white font-bold">
                                    {images.text}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='p-6'>
                <div className='text-center'>
                    <h3>Sobre a Tripo</h3>
                    <h1>Entretenimento para mobile é com a gente</h1>
                    <p>
                        Sou um parágrafo. Aqui você pode adicionar e editar seu texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.
                    </p>
                </div>
            </section>
        </>
    )
}