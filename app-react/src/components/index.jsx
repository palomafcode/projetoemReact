import React from 'react';

function Background1() {
return (
<div className="background1">
<img src="/images/background1.png" alt="background1" />
</div>
);
}

function Navbar() {
return (
<div className="barra">
<div className="menu-centro">
<div className="barra-conteiner centralizador">
<div className="logoesquerda">
<img src="/images/Coluna - Logo.png" alt="logo" />
</div>
<nav className="direita">
<ul>
<div className="barrainicio">
<li><a href="#inicio">Sobre Nós</a></li>
<li><a href="#sobre-mim">Serviços</a></li>
<li><a href="#projetos">Cases</a></li>
<li><a href="#habilidades">#vemprabeta</a></li>
</div>
</ul>
<div className="faleconosco">
<button>fale conosco</button>
</div>
</nav>
</div>
</div>
</div>
);
}

function Inicio() {
return (
<section id="inicio">
<div className="altura-ajuste">
<div className="inicio centralizador">
<div className="ajustador organizador">
<div className="apresentacao">
<div className="oportunidades">
<h4>Do beta ao alfa</h4>
<h5>estamos sempre um passo à frente!</h5>
<p>
Oferecemos soluções personalizadas, desde a concepção do
projeto até o lançamento e manutenção do produto, garantindo
que cada etapa do processo seja cuidadosamente planejada e
executada com excelência.
</p>
</div>
<div className="notebooks">
<img src="/images/Coluna - imagens.png" alt="notebooks" />
</div>
<div className="linkedin">
<a
               href="https://www.linkedin.com/in/paloma-franco-villas-boas-2382a696/"
               target="_blank"
               className="link"
             >
Saiba mais
</a>
</div>
</div>
<div className="background2">
          <img src="/images/background2.png" alt="background2" />

          <div className="imagens">
            <img
              className="planta1"
              src="/images/planta.png"
              alt="planta1"
            />
            <img className="mesa" src="/images/Mesa.png" alt="mesa" />
            <img
              className="grafico"
              src="/images/Notebook.png"
              alt="grafico"
            />
            <img
              className="prateleira"
              src="/images/prateleira.png"
              alt="prateleira"
            />
            <img className="person" src="/images/person.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}