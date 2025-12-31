import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';



const RelatedBlogCarousel = () => {
    return (
        <div>
            <Carousel className="w-full max-w-sm">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                                <Card className='h-fit'>
                                    <CardContent className="">
                                        <div className="w-full relative">
                                            <Image
                                                src="/heroforeground.jpg"
                                                alt="profile"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default RelatedBlogCarousel;