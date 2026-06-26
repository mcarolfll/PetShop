import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Home() {

const navigate = useNavigate();
const [openFaq, setOpenFaq] = useState<string | null>("hs-pet-faq-one");

const toggleFaq = (id: string) => {
  setOpenFaq(openFaq === id ? null : id);
};


  return (
    
    <>
      {/* Hero */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-900 sm:text-4xl lg:text-6xl lg:leading-tight">
              Cuide com amor do seu{" "}
              <span style={{ color: "#1d4ed8" }}>melhor amigo</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              Produtos premium, banho & tosa, veterinário e muito mais. Tudo que seu pet precisa em um só lugar.
            </p>

            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                style={{ backgroundColor: "#1d4ed8", color: "#fff", border: "none" }}
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg hover:opacity-90 transition"
                onClick={() => navigate("/Produtos")}>            
                Ver Produtos
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <a
                style={{ backgroundColor: "#fef08a", color: "#1e293b", border: "1px solid #fde047" }}
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg shadow-sm hover:opacity-90 transition"
                onClick={() => navigate("/Dicas")}>              
                Falar com especialista
              </a>
            </div>
            {/* End Buttons */}
            
        </div>
          <div className="relative ms-4 ">
            <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Cachorro feliz no petshop"
            />          
          </div>
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}

      {/* Card Blog – Dicas e Novidades */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900">
            Dicas e novidades para seu pet
          </h2>
          <p className="mt-1 text-gray-600">
            Conteúdo feito com carinho para tutores que amam seus animais.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
          {/* Card 1 */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
            style={{ borderColor: "#e5e7eb" }}
            href="#"
          >
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80"
                alt="Cães brincando"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-500">Saúde</p>
              <h3 className="mt-2 text-lg font-medium text-gray-900 group-hover:text-blue-700">
                Como manter seu cão saudável no inverno
              </h3>
            </div>
          </a>

          {/* Card 2 */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
            style={{ borderColor: "#e5e7eb" }}
            href="#"
          >
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80"
                alt="Gato em casa"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-500">Gatos</p>
              <h3 className="mt-2 text-lg font-medium text-gray-900 group-hover:text-blue-700">
                5 sinais de que seu gato está feliz e saudável
              </h3>
            </div>
          </a>

          {/* Card 3 */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
            style={{ borderColor: "#e5e7eb" }}
            href="#"
          >
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80"
                alt="Banho em cachorro"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-500">Cuidados</p>
              <h3 className="mt-2 text-lg font-medium text-gray-900 group-hover:text-blue-700">
                Quando levar seu pet ao banho e tosa?
              </h3>
            </div>
          </a>

          {/* Card 4 */}
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
            style={{ borderColor: "#e5e7eb" }}
            href="#"
          >
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80"
                alt="Nutrição animal"
              />
            </div>
            <div className="p-4 md:p-5">
              <p className="mt-2 text-xs uppercase text-gray-500">Nutrição</p>
              <h3 className="mt-2 text-lg font-medium text-gray-900 group-hover:text-blue-700">
                A dieta ideal para raças de pequeno porte
              </h3>
            </div>
          </a>
        </div>
        {/* End Grid */}


  
      </div>
    
      {/* Features / Stats */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            {/* Stats */}
            <div className="lg:pe-6 xl:pe-12">
              <p className="text-6xl font-bold leading-10" style={{ color: "#1d4ed8" }}>
                98%

              </p>
              <p className="mt-2 sm:mt-3 text-gray-500">
                dos tutores aprovam nosso serviço de banho e tosa
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200">
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-3xl font-semibold" style={{ color: "#1d4ed8" }}>500+</p>
                <p className="mt-1 text-gray-500">atendimentos por mês</p>
              </div>
              <div>
                <p className="text-3xl font-semibold" style={{ color: "#1d4ed8" }}>12 anos</p>
                <p className="mt-1 text-gray-500">de experiência no mercado</p>
              </div>
              <div>
                <p className="text-3xl font-semibold" style={{ color: "#1d4ed8" }}>100%</p>
                <p className="mt-1 text-gray-500">produtos certificados e seguros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features */}

      {/* FAQ */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900">
                Perguntas<br />frequentes
              </h2>
              <p className="mt-1 hidden md:block text-gray-600">
                Respostas para as dúvidas mais comuns dos nossos clientes.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            {/* Accordion */}
            <div className="divide-y divide-gray-200">
              {/* FAQ Item 1 */}
              <div className="pb-3" id="hs-pet-faq-one">
                <button 
                  onClick={() => toggleFaq("hs-pet-faq-one")}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-900 rounded-lg transition hover:text-gray-500"
                >
                  Preciso agendar o banho e tosa com antecedência?
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${openFaq === "hs-pet-faq-one" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === "hs-pet-faq-one" && (
                  <div className="pb-2">
                    <p className="text-gray-600">
                      Sim, recomendamos agendar com pelo menos 24 horas de antecedência para garantir disponibilidade. Você pode agendar pelo WhatsApp, telefone ou diretamente em nossa loja.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="pt-6 pb-3" id="hs-pet-faq-two">
                <button 
                  onClick={() => toggleFaq("hs-pet-faq-two")}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-900 rounded-lg transition hover:text-gray-500"
                >
                  Vocês atendem todas as raças e portes?
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${openFaq === "hs-pet-faq-two" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === "hs-pet-faq-two" && (
                  <div className="pb-2">
                    <p className="text-gray-600">
                      Sim! Atendemos cães e gatos de todos os portes e raças. Nossa equipe é treinada para lidar com animais de diferentes temperamentos com segurança e carinho.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="pt-6 pb-3" id="hs-pet-faq-three">
                <button 
                  onClick={() => toggleFaq("hs-pet-faq-three")}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-900 rounded-lg transition hover:text-gray-500"
                >
                  Os produtos usados são seguros para meu pet?
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${openFaq === "hs-pet-faq-three" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === "hs-pet-faq-three" && (
                  <div className="pb-2">
                    <p className="text-gray-600">
                      Utilizamos apenas produtos hipoalergênicos, certificados e testados dermatologicamente. A segurança e o bem-estar do seu animal é nossa prioridade absoluta.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="pt-6 pb-3" id="hs-pet-faq-four">
                <button 
                  onClick={() => toggleFaq("hs-pet-faq-four")}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-900 rounded-lg transition hover:text-gray-500"
                >
                  Vocês têm serviço de veterinário?
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${openFaq === "hs-pet-faq-four" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === "hs-pet-faq-four" && (
                  <div className="pb-2">
                    <p className="text-gray-600">
                      Sim! Contamos com um veterinário parceiro que atende por agendamento, de segunda a sábado. Oferecemos consultas, vacinação e orientações nutricionais.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="pt-6 pb-3" id="hs-pet-faq-five">
                <button 
                  onClick={() => toggleFaq("hs-pet-faq-five")}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-900 rounded-lg transition hover:text-gray-500"
                >
                  Posso acompanhar o serviço do meu pet?
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${openFaq === "hs-pet-faq-five" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === "hs-pet-faq-five" && (
                  <div className="pb-2">
                    <p className="text-gray-600">
                      Enviamos fotos pelo WhatsApp durante o atendimento para você ver que seu pet está bem e sendo cuidado com todo o amor que merece.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 6 */}
              <div className="pt-6 pb-3" id="hs-pet-faq-six">
                <button 
                  onClick={() => toggleFaq("hs-pet-faq-six")}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-900 rounded-lg transition hover:text-gray-500"
                >
                  Quais são as formas de pagamento?
                  <svg 
                    className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${openFaq === "hs-pet-faq-six" ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === "hs-pet-faq-six" && (
                  <div className="pb-2">
                    <p className="text-gray-600">
                      Aceitamos Pix, cartão de débito e crédito (parcelamos em até 3x sem juros), e dinheiro. Temos programa de fidelidade com desconto progressivo para clientes frequentes!
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* End Accordion */}
          </div>
        </div>
      </div>
      {/* End FAQ */}

      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <div>
            <a className="flex-none text-xl font-semibold text-gray-900" href="#" aria-label="Brand">
              PetShop Amigo Fiel
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500">
              Com amor e cuidado para o seu melhor amigo.
            </p>
            <p className="text-gray-500"> 2026 PetShop Amigo Fiel.</p>
          </div>

          
        </div>
      </footer>
    </>
  );
}