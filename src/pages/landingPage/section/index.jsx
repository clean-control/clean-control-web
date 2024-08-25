

export default function Section(pros) {
 console.log(pros.nome);
 
  return (
    <>
      <section className="content">
        <div className="title">
          <h1>Serviços</h1>
        </div>

        <div className="section-box">
          <div className="box">
            <div className="box-title">
              <h2>Conect Control</h2>
            </div>

            <div className="box-content">
              <p> A Conect Control é um serviço que permite visualizar conexões de amigos, tanto com outros usuários quanto com as empresas parceras.</p>


              <button>
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
