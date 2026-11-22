
import { restaurant } from "@/data/restaurant";

export default function RestaurantInfo() {
    return (
        <section
            id="informacion"
            className="bg-zinc-950 px-6 py-20 text-white"
        >
            <div className="mx-auto max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                    Conócenos
                </p>

                <h2 className="mt-4 text-4xl font-black">
                    {restaurant.name}
                </h2>

                <p className="mt-5 text-zinc-400">
                    {restaurant.city}, {restaurant.province}
                </p>

                <a
                    href={restaurant.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
                >
                    Visitar Instagram
                </a>

                {restaurant.demoMode && (
                    <p className="mt-8 text-sm text-zinc-500">
                        Propuesta web no oficial.
                        Los pedidos online no están habilitados.
                    </p>
                )}
            </div>
        </section>
    );
}
