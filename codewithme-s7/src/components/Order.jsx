import React from 'react';

function Order({name, count, price}) {
    return (
        <div className="flex justify-between gap-6 py-3 border-b-1 border-primary-rose-300">
            <div className="flex flex-col">
                <span className="text-primary-rose-900 font-semibold">{name}</span>
                <div className="flex gap-3">
                    <span className="text-primary-red font-bold">{count}x</span>
                    <span className="text-primary-rose-300 font-light">@ ${price.toFixed(2)}</span>
                    <span className="text-primary-rose-300 font-semibold">${(price * count).toFixed(2)}</span>
                </div>
            </div>
            <svg className="border-1 border-primary-rose-400 rounded-full w-4 h-4 p-px" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>

        </div>
    );
}

export default Order;