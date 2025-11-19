import React from "react"
import { Button } from "../ui/button"

export default function ContactForm(){
    return(
        <>
        <div className="bg-white rounded px-20 mt-20 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col">
            <div className="pt-10 pb-20 flex flex-col justif-center items-center ">
                <h1 className="text-[40px] ">Send Us</h1>
        <p className="w-full text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Ullam sint quas dicta neque distinctio, totam eum amet officiis
             corrupti beatae reprehenderit nulla, quos sunt repudiandae. 
             Corporis architecto sint fugit iste.</p>
            </div>
        <hr />
            <form action="" className="py-10">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="bg-[--gray-custom] w-full rounded my-1 py-2" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="bg-[--gray-custom] w-full rounded my-1 py-2" />
                    </div>
                </div>
                <div className="flex flex-col mt-2">
                        <label htmlFor="phone">Phone number</label>
                        <input type="tel" className="bg-[--gray-custom] w-full rounded my-1 py-2" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="email">Your messeage </label>
                        <input type="text" className="bg-[--gray-custom] w-full rounded my-1 py-20" />
                    </div>
                    <Button className="bg-[--primary] p-5 mb-20 mt-5">
                        send Message
                    </Button>
            </form>
        </div>
        </>
    )
}