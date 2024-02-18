"use client";
import mock from '@/utils/mock';
import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <section>
                <div className='flex justify-between items-center z-20'>
                    <div className='2xl:ml-32 ml-16'>
                        <h1 className='flex-1 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] ml-6 text-red-400 font-bold'>Welcome</h1>
                        <h2 className='flex-1 text-zinc-900 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] ml-6'>Óculos para todos os estilos de gatos</h2>
                    </div>
                    <img className='w-1/2 h-1/2' src='/background.png' />
                    <div className='absolute xs:bottom-10 bottom-20 w-full
                         flex justify-center items-center'>
                        <a href="#cards">
                            <div className='w-[35px] h-[64px]
                                rounded-3xl border-4 border-red-400 flex justify-center items-start p-2'>
                                <motion.div
                                    animate={{
                                        y: [0, 24, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: 'loop'
                                    }}
                                    className="w-3 h-3 rounded-full bg-red-400 mb-1"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section id='cards' className='flex justify-center'>
                <div className="inline-grid grid-cols-4 relative justify-items-center overflow-hidden bg-cover bg-no-repeat pb-20">
                    {mock.imagesCards.map((images, index) => (
                        <div key={index} className='bg-red-400 h-80 w-60 max-w-96 max-h-96 rounded-2xl m-4 overflow-hidden cursor-pointer'>
                            <img
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out hover:scale-110"
                                src={images.url}
                                alt={`Imagem ${index}`}
                            />
                        </div>
                    ))}
                    <div className='flex relative justify-center border-4 bg-gradient-to-t from-red-400 to-red-200 group 
                        hover:from-red-300 hover:to-red-200 opacity-95 hover:opacity-100 h-80 w-60 rounded-2xl m-4 cursor-pointer'>
                        <span className='flex flex-col items-center justify-center text-center font-semibold text-2xl group-hover:scale-105 transition-transform duration-700 ease-in-out'>
                            Conheça nossos <br /> produtos
                            <FaArrowDownLong className="mt-2 text-xl" />
                        </span>
                    </div>
                </div>
            </section>
            <section id='sobre' className='flex justify-center'>
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-left leading-relaxed content">
                        <h3 className='bold text-xl text-center font-semibold mb-2'>Sobre a Cats</h3>
                        <h1 className='bold text-5xl text-center mb-6 font-bold'>Os óculos perfeitos para aos seus amigos peludos! </h1>
                        <p className='text-center text-lg mb-4'>
                            Sou um parágrafo. Aqui você pode adicionar e editar seu texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.
                        </p>
                        <div className='text-center'>
                            <button className='bg-red-400 self-center mt-4 text-white py-4 center rounded-lg w-36 hover:outline outline-1 transition duration-500 ease-out hover:bg-white hover:text-black'>Saiba mais</button>
                        </div>
                    </div>
                </div>
            </section >
            <section className='max-w-2xl mx-auto my-16 relative'>
                <div className='bg-red-400 rounded-2xl'>
                    <div className='relative'>
                        <img className='rounded-2xl hover:opacity-95 z-10 transition duration-700 ease-in-out' src="/image-section.jpg" alt="" />
                    </div>
                    <div className='absolute bottom-0 left-0 mr-40'>
                        <img src='/image-section-side.png' className='z-50 w-40' />
                    </div>
                </div>
            </section>
        </>
    )
}