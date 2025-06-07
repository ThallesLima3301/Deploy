import { BarChart3, Wallet, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './components/Header';

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('http://localhost:3001/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      } else {
        alert('Erro ao enviar mensagem.');
      }
    } catch (err) {
      console.error(err);
      alert('Erro na conexão com o servidor.');
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <motion.section
          id="hero"
          className="bg-blue-600 text-white text-center py-24 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Finanças+ | Controle seu dinheiro com facilidade
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Organize suas finanças, acompanhe seus gastos e atinja seus objetivos com nosso app completo.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="#contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Comece agora
          </motion.a>
        </motion.section>

        {/* Sobre */}
        <motion.section
          id="about"
          className="py-20 px-6 bg-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Por que usar o Finanças+</h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Nosso objetivo é simplificar sua vida financeira. Com uma interface intuitiva e ferramentas eficazes,
            você terá controle total sobre seu dinheiro.
          </p>
        </motion.section>

        {/* Features */}
        <motion.section
          id="features"
          className="py-20 px-6 bg-gray-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">Funcionalidades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FeatureCard icon={<Wallet />} title="Gestão de Gastos" text="Registre despesas e acompanhe para onde seu dinheiro vai." />
            <FeatureCard icon={<BarChart3 />} title="Relatórios Visuais" text="Entenda seus hábitos com gráficos e análises fáceis de ler." />
            <FeatureCard icon={<ShieldCheck />} title="Segurança" text="Seus dados são criptografados e protegidos com padrões de segurança." />
            <FeatureCard icon={<Users />} title="Multiusuário" text="Compartilhe contas ou crie perfis diferentes para membros da família." />
          </div>
        </motion.section>

        {/* Depoimentos */}
        <motion.section
          id="testimonials"
          className="py-20 px-6 text-center bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">O que nossos usuários dizem</h2>
          <blockquote className="italic max-w-xl mx-auto text-base sm:text-lg text-gray-600">
            “Nunca foi tão fácil acompanhar meus gastos. O Finanças+ me ajudou a economizar mais de R$ 1.000 em 2 meses!”
            <footer className="mt-4 font-semibold">– Maria Oliveira</footer>
          </blockquote>
        </motion.section>

        {/* Contato */}
        <motion.section
          id="contact"
          className="py-20 px-6 bg-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Fale com a gente</h2>
          <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Seu nome" className="w-full px-4 py-2 border rounded" required />
            <input name="email" type="email" placeholder="Seu e-mail" className="w-full px-4 py-2 border rounded" required />
            <textarea name="message" placeholder="Sua mensagem" rows="4" className="w-full px-4 py-2 border rounded" />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Enviar
            </motion.button>
          </form>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Finanças+. Todos os direitos reservados.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="mx-auto mb-4 w-10 h-10 text-blue-600">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base">{text}</p>
    </motion.div>
  );
}

export default App;
