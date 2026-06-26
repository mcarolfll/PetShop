import { useNavigate } from "react-router-dom";

export default function Produtos (){

const navigate = useNavigate();


    return(


<>


{/* Botão Voltar */}
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto pt-8">
        <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition"
        >
            <svg className="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span className="text-lg font-medium">Voltar</span>
        </button>
    </div>
{/* Fim Botão Voltar */}

{/* Listings */}
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-8 lg:py-16 mx-auto">
  {/* Card Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
    {/* Card */}
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl w-48 mx-auto">
              <img className="size-full object-cover rounded-2xl" src="https://cdn.awsli.com.br/1628/1628599/produto/369580711/brinquedo-para-pet-bola-com-alimento--1--0jrz27f408.jpg" alt="Bolinha para Cachorro" />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black text-center">
                Bolinha para Cachorro
              </h3>

              <p className="mt-2 font-semibold text-black text-center">
                R$ 19,90
              </p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Material:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Borracha Atóxica</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Indicação:</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-black">Cães de pequeno e médio porte</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Categoria:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Brinquedos Interativos</span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto">
            <button className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none">
              Comprar
            </button>
          </div>
    </div>
    {/* End Card */}

    {/* Card */}
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl w-48 mx-auto">
              <img className="size-full object-cover rounded-2xl" src="https://purinorte.cdn.magazord.com.br/img/2025/05/produto/10641/5981-1.png?ims=fit-in/600x600/filters:fill(white)" alt="Brinquedo de Corda" />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black text-center">
                Brinquedo de Corda
              </h3>

              <p className="mt-2 font-semibold text-black text-center">
                R$ 24,90
              </p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Material:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Algodão Resistente</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Indicação:</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-black">Cães de todos os portes</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Categoria:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Mordedores</span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto">
            <button className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none">
              Comprar
            </button>
          </div>
    </div>
    {/* End Card */}

    {/* Card */}
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl w-48 mx-auto">
              <img className="size-full object-cover rounded-2xl" src="https://images.tcdn.com.br/img/img_prod/699275/brinquedo_corda_ball_para_pet_4501_1_77055f08663a30c3b7257e3aaf04e07c.jpg" alt="Varinha para Gatos" />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black text-center">
                Varinha para Gatos
              </h3>

              <p className="mt-2 font-semibold text-black text-center">
                R$ 17,90
              </p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Material:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Plástico e Penas</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Indicação:</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-black">Gatos de todas as idades</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Categoria:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Brinquedos Interativos</span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto">
            <button className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none">
              Comprar
            </button>
          </div>
    </div>
    {/* End Card */}

    {/* Card */}
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl w-48 mx-auto">
              <img className="size-full object-cover rounded-2xl" src="https://veterinarioalphaconde.com.br/wp-content/uploads/2022/05/Foto-Pet-Shop.jpg" alt="Ratinho de Pelúcia" />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black text-center">
                Ratinho de Pelúcia
              </h3>

              <p className="mt-2 font-semibold text-black text-center">
                R$ 12,90
              </p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Material:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Pelúcia Macia</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Indicação:</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-black">Gatos filhotes e adultos</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Categoria:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Diversão</span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto">
            <button className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none">
              Comprar
            </button>
          </div>
    </div>
    {/* End Card */}

    {/* Card */}
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl w-48 mx-auto">
              <img className="size-full object-cover rounded-2xl" src="https://cdn.awsli.com.br/2500x2500/1226/1226108/produto/294451825/brinquedo-pet-macaco-de-pel-cia-para-c-es-x5ynacrc3b.jpg" alt="Frisbee para Cachorro" />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black text-center">
                Frisbee para Cachorro
              </h3>

              <p className="mt-2 font-semibold text-black text-center">
                R$ 29,90
              </p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Material:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Silicone Flexível</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Indicação:</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-black">Cães ativos</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Categoria:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Brinquedos para Exercícios</span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto">
            <button className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none">
              Comprar
            </button>
          </div>
    </div>
    {/* End Card */}

    {/* Card */}
    <div className="group flex flex-col">
      <div className="relative">
        <div className="aspect-4/4 overflow-hidden rounded-2xl w-48 mx-auto">
              <img className="size-full object-cover rounded-2xl" src="https://cdn.leroymerlin.com.br/products/brinquedo_comedouro_interativo_petisco_racao_pet_cao_cachorro_1571753701_2d73_600x600.jpg" alt="Brinquedo Inteligente com Petiscos" />
            </div>

            <div className="pt-4">
              <h3 className="font-medium md:text-lg text-black text-center">
                Brinquedo Inteligente com Petiscos
              </h3>

              <p className="mt-2 font-semibold text-black text-center">
                R$ 39,90
              </p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-sm">
            {/* List */}
            <div className="flex flex-col">
              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Material:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Plástico Resistente</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Indicação:</span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-black">Cães e gatos</span>
                  </div>
                </div>
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="py-3 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-medium text-black">Categoria:</span>
                  </div>

                  <div className="text-end">
                    <span className="text-black">Enriquecimento Ambiental</span>
                  </div>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End List */}
          </div>

          <div className="mt-auto">
            <button className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 transition disabled:opacity-50 disabled:pointer-events-none">
              Comprar
            </button>
          </div>
    </div>
    {/* End Card */}
  </div>
  {/* End Card Grid */}
</div>
{/* End Listings */}


</>



    )

}