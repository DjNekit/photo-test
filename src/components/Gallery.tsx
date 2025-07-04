import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from '@/motion/animations';

type ImageType = {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

type GalleryProps = {
    images: ImageType[];
};

const Gallery = ({ images }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image: ImageType, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const goToPrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Галерея */}
            <div className="grid gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <motion.div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => openModal(image, index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={499}
                            height={519}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Модальное окно */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-4xl w-full max-h-[90vh]"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={selectedImage.width}
                                height={selectedImage.height}
                                className="w-full h-full object-contain max-h-[80vh]"
                            />

                            {/* Кнопки навигации */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>

                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>

                            {/* Кнопка закрытия */}
                            <button
                                className="absolute top-4 right-4 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
                                onClick={closeModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6 hover:text-gray-300 transition-colors"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;