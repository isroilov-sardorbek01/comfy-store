import React, { useState } from "react";

function Home() {
    const [open, setOpen] = useState(false);

    function onOpen(e) {
        setOpen(true);
    }
    function onCancel(e) {
        e.preventDefault();
        setOpen(false);
    }
    return (
        <div>
            <div className="container relative">
                <h1 onClick={onOpen} className="cursor-pointer">
                    Open modal
                </h1>
                <div className={open ? "block" : "hidden"}>
                    <div className="absolute bg-blue-400 top-[-40px] p-3 text-center rounded-xl">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus sunt cumque inventore quae
                            deleniti qui, illo cupiditate ab, tempora quidem,
                            mollitia exercitationem omnis sint libero quibusdam
                            molestias tempore delectus impedit dolorem unde
                            quaerat saepe dolore obcaecati ad? Voluptatem
                            commodi nam fugit nulla. Dicta voluptates, aperiam
                            perspiciatis, doloremque quod autem dignissimos
                            optio at sit suscipit nesciunt! Expedita beatae
                            saepe, quod dignissimos, sed dicta distinctio
                            mollitia ratione nesciunt commodi in tempore quia
                            facilis rem harum impedit. Qui labore molestiae amet
                            hic dicta aliquam ipsa, dolor assumenda enim
                            corrupti consequatur neque, unde voluptas fugit.
                            Optio distinctio doloremque quisquam non cum
                            consequatur reprehenderit facere!
                        </p>
                        <button
                            onClick={onCancel}
                            className="px-4 mt-10 bg-white rounded-xl"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
