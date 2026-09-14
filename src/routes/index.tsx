import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  HeartPulse,
  Instagram,
  Linkedin,
  LockKeyhole,
  Menu,
  Newspaper,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Upload,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import teamAudio from "@/assets/equipo-audio.mp3";
import teamPhoto from "@/assets/equipo-skinscan.jpg";
import lesionSample from "@/assets/lesion-sample.jpg";
import logoImage from "@/assets/skinscan-logo.png";
import platformImage from "@/assets/skinscan-platform.png";
import posterImage from "@/assets/skinscan-poster.png";
import { AudioPlayer } from "@/components/AudioPlayer";
import { BackgroundAudio } from "@/components/BackgroundAudio";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SkinScan | Evaluación preliminar de lesiones" },
      {
        name: "description",
        content:
          "Evalúa fotografías de lesiones cutáneas con inteligencia artificial y recibe orientación preliminar en lenguaje claro.",
      },
      { property: "og:title", content: "SkinScan | Evaluación preliminar de lesiones" },
      {
        property: "og:description",
        content: "Orientación preliminar sobre lesiones cutáneas mediante inteligencia artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkinScanPage,
});

const navItems = [
  ["Cómo funciona", "#como-funciona"],
  ["Beneficios", "#beneficios"],
  ["Para quién", "#para-quien"],
  ["Artículos", "#articulos"],
  ["Planes", "#planes"],
  ["Preguntas", "#preguntas"],
] as const;

const benefits = [
  { icon: Clock3, title: "Orientación en pocos pasos", text: "Obtén una evaluación preliminar sin procesos complejos y desde cualquier dispositivo." },
  { icon: FileText, title: "Resultados fáciles de entender", text: "Recibe una explicación clara del tipo probable de lesión y qué considerar después." },
  { icon: ShieldCheck, title: "Decisiones mejor informadas", text: "Identifica cuándo conviene observar un cambio o buscar atención médica profesional." },
  { icon: LockKeyhole, title: "Privacidad desde el diseño", text: "Tus imágenes y resultados se tratan como información sensible de salud." },
  { icon: Activity, title: "Seguimiento organizado", text: "Conserva un registro visual que te ayude a reconocer cambios con el tiempo." },
  { icon: Stethoscope, title: "Apoyo para la consulta", text: "Llega a tu cita con información preliminar que facilite la conversación con el especialista." },
];

const faqs = [
  ["¿SkinScan ofrece un diagnóstico médico?", "No. SkinScan brinda una evaluación preliminar orientativa. Solo un profesional de la salud puede realizar un diagnóstico después de una evaluación clínica."],
  ["¿Qué tipo de fotografía debo subir?", "Usa una imagen nítida, bien iluminada, sin filtros y tomada de cerca. Procura que la lesión esté centrada y completamente visible."],
  ["¿Qué información muestra el resultado?", "La plataforma presenta el tipo probable de lesión, un nivel de confianza del modelo y una interpretación sencilla para ayudarte a decidir el siguiente paso."],
  ["¿Qué hago si el resultado me preocupa?", "Busca atención médica, especialmente si la lesión cambia de forma, tamaño o color, causa molestias, sangra o presenta cualquier señal que te preocupe."],
  ["¿Puedo usar SkinScan si soy profesional de la salud?", "Sí. Los planes para profesionales y clínicas están pensados como apoyo preliminar y para organizar evaluaciones, nunca como reemplazo del criterio clínico."],
  ["¿Cómo se protegen mis imágenes?", "SkinScan trata las fotografías como información sensible. Antes de usar el servicio, podrás revisar la política de privacidad y las condiciones aplicables al almacenamiento y uso de datos."],
] as const;

function Logo() {
  return (
    <a href="#inicio" className="flex shrink-0 items-center" aria-label="SkinScan, inicio">
      <img
        src={logoImage}
        alt="SkinScan"
        width={610}
        height={170}
        className="h-9 w-auto object-contain sm:h-10"
      />
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-bold uppercase text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>
    </div>
  );
}

function AnalysisMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-brand-teal-soft" />
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border bg-muted/50 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="size-2.5 shrink-0 rounded-full bg-destructive/70" />
            <span className="size-2.5 shrink-0 rounded-full bg-warning-foreground/40" />
            <span className="size-2.5 shrink-0 rounded-full bg-primary/60" />
            <span className="ml-2 truncate text-xs text-muted-foreground">Análisis preliminar</span>
          </div>
          <span className="ml-3 flex shrink-0 items-center gap-1 text-xs font-semibold text-primary"><ShieldCheck className="size-3.5" /> Privado</span>
        </div>
        <div className="grid gap-5 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-6">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img src={lesionSample} alt="Fotografía ilustrativa de una lesión cutánea para análisis" width={1024} height={1024} className="h-full w-full object-cover" />
            <span className="absolute inset-5 rounded-lg border-2 border-dashed border-primary/70" aria-hidden="true" />
            <span className="absolute bottom-3 left-3 rounded bg-foreground/80 px-2 py-1 text-[10px] font-semibold text-background">Imagen ilustrativa</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <p className="text-xs font-semibold text-muted-foreground">TIPO PROBABLE</p>
            <h3 className="mt-1 text-lg font-bold text-foreground">Nevus melanocítico</h3>
            <span className="mt-2 w-fit rounded-full bg-brand-teal-soft px-2.5 py-1 text-xs font-bold text-primary">Evaluación preliminar</span>
            <div className="mt-5">
              <div className="flex justify-between text-xs"><span className="text-muted-foreground">Confianza del modelo</span><span className="font-bold text-foreground">Alta</span></div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-4/5 rounded-full bg-primary" /></div>
            </div>
            <div className="mt-5 rounded-md border border-border bg-secondary p-3">
              <p className="text-xs font-bold text-secondary-foreground">Interpretación simple</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">La imagen comparte rasgos con lesiones pigmentadas comunes. Observa cualquier cambio y consulta a un profesional.</p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2 border-t border-border bg-warning-soft px-4 py-3 text-xs leading-5 text-warning-foreground sm:px-6">
          <HeartPulse className="mt-0.5 size-4 shrink-0" />
          <strong>Este resultado no constituye un diagnóstico médico.</strong>
        </div>
      </div>
    </div>
  );
}

function IconCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <article className="group border-t border-border pt-6 transition-colors hover:border-primary">
      <div className="mb-5 grid size-11 place-items-center rounded-md bg-brand-teal-soft text-primary transition-transform group-hover:-translate-y-1">{icon}</div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{children}</p>
    </article>
  );
}

function ArticleSection() {
  return (
    <section id="articulos" className="scroll-mt-20 border-y border-border bg-surface-warm py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Información"
          title="Contexto claro sobre la evaluación preliminar de la piel."
          text="Dos lecturas que explican el propósito de SkinScan, la brecha dermatológica en el Perú y el alcance responsable de la tecnología."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Artículo pequeño */}
          <article className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
              <Newspaper className="size-4" /> Lectura rápida
            </div>
            <h3 className="font-display text-2xl font-semibold leading-snug text-foreground">
              SkinScan: tecnología que acerca la evaluación preliminar de la piel en Perú
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                El acceso oportuno a la atención dermatológica continúa siendo un desafío en el Perú. La disponibilidad de especialistas es limitada —con aproximadamente 1.1 dermatólogos por cada 100 000 habitantes— y su concentración principalmente en Lima puede generar tiempos de espera de 90 a 120 días para una interconsulta. Ante esta realidad, contar con herramientas accesibles que orienten los primeros pasos puede contribuir a una atención más informada.
              </p>
              <p>
                SkinScan es una plataforma web SaaS freemium que utiliza inteligencia artificial, mediante una red neuronal convolucional (CNN), para analizar fotografías de lesiones cutáneas. Su evaluación preliminar muestra el tipo probable de lesión, un nivel de confianza y una interpretación en lenguaje simple, facilitando la comprensión de los resultados.
              </p>
              <p>
                Esta tecnología puede beneficiar a usuarios que buscan una primera orientación sobre cambios en su piel, así como a médicos generales y clínicas que requieren una herramienta de soporte inicial para complementar la evaluación de sus pacientes. SkinScan busca reducir barreras de acceso a información comprensible, promoviendo que las personas identifiquen cuándo es importante buscar atención médica.
              </p>
            </div>
            <div className="mt-auto flex items-start gap-3 rounded-lg border border-warning-foreground/20 bg-warning-soft px-4 py-3 text-sm leading-6 text-warning-foreground">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              <p>
                <strong>Aviso legal:</strong> SkinScan no reemplaza el diagnóstico médico profesional. Sus resultados son orientativos y no deben utilizarse para confirmar una enfermedad, iniciar tratamientos ni retrasar una consulta.
              </p>
            </div>
          </article>

          {/* Artículo largo */}
          <article className="rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-primary">
              <BookOpen className="size-4" /> Artículo completo
            </div>
            <h3 className="font-display text-2xl font-semibold leading-snug text-foreground">
              SkinScan: inteligencia artificial como apoyo preventivo frente a la brecha dermatológica en el Perú
            </h3>

            <div className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground">
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
                  <Quote className="size-4 text-primary" /> Introducción
                </h4>
                <p>
                  La salud dermatológica cumple un papel importante en la prevención, la detección temprana y el seguimiento de diversas enfermedades cutáneas. Sin embargo, el acceso oportuno a una evaluación especializada no es igual para toda la población peruana. Las diferencias geográficas, la disponibilidad limitada de especialistas y los tiempos de espera pueden dificultar que una persona reciba orientación médica cuando identifica una lesión nueva o un cambio en su piel.
                </p>
                <p className="mt-3">
                  En este contexto, las tecnologías de salud digital (HealthTech) ofrecen oportunidades para complementar los servicios tradicionales. SkinScan surge como una plataforma web SaaS freemium que emplea inteligencia artificial para realizar una evaluación preliminar de lesiones cutáneas a partir de fotografías. Su propósito no es sustituir al especialista, sino brindar información inicial comprensible que contribuya a una atención más informada y a la búsqueda oportuna de orientación profesional.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-bold text-foreground">El problema: brecha dermatológica</h4>
                <p>
                  La brecha dermatológica comprende las dificultades que enfrenta la población para acceder a servicios de prevención, evaluación y tratamiento de enfermedades de la piel. En el Perú, la disponibilidad de dermatólogos es reducida en relación con la población. Según el contexto de este proyecto, existen aproximadamente 1.1 dermatólogos por cada 100 000 habitantes, concentrados principalmente en Lima. Asimismo, una interconsulta dermatológica puede implicar tiempos de espera de 90 a 120 días.
                </p>
                <p className="mt-3">
                  La consecuencia potencial de esta brecha es que algunas personas posterguen la consulta, normalicen cambios cutáneos o no sepan qué nivel de atención necesitan. En lesiones sospechosas, como aquellas que podrían corresponder a un melanoma, la demora en la evaluación puede ser clínicamente relevante. No obstante, no toda lesión cutánea es maligna y no toda demora conduce necesariamente a un diagnóstico tardío.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-bold text-foreground">Contexto sanitario en el Perú</h4>
                <p>
                  El sistema sanitario peruano presenta diferencias importantes entre Lima y otras regiones en cuanto a infraestructura, disponibilidad de especialistas y acceso a servicios médicos. En zonas alejadas de los principales centros urbanos, una consulta dermatológica puede requerir desplazamientos, gastos adicionales y una mayor coordinación entre establecimientos.
                </p>
                <p className="mt-3">
                  La atención primaria cumple una función esencial en este escenario. Los médicos generales suelen constituir el primer punto de contacto para numerosos pacientes y pueden necesitar herramientas de apoyo que faciliten la identificación inicial de problemas dermatológicos y la decisión de derivar a un especialista.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-bold text-foreground">Propuesta del proyecto: SkinScan y tecnología CNN</h4>
                <p>
                  SkinScan se basa en el análisis de una fotografía de una lesión cutánea mediante un modelo de red neuronal convolucional (CNN). Las CNN son arquitecturas de aprendizaje profundo diseñadas para identificar patrones en imágenes. En términos generales, el modelo procesa características visuales, como formas, texturas y estructuras, y las utiliza para estimar la categoría más probable dentro de las clases para las que fue entrenado.
                </p>
                <p className="mt-3">
                  En SkinScan, el resultado se presenta como una clasificación preliminar, acompañada de un nivel de confianza y una interpretación en lenguaje simple. Es fundamental distinguir entre clasificación automatizada y diagnóstico médico. Una predicción generada a partir de una fotografía no incorpora necesariamente antecedentes, síntomas, evolución, palpación, dermatoscopia ni biopsia.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-bold text-foreground">Beneficios principales</h4>
                <ol className="list-decimal space-y-2 pl-5">
                  <li><strong>Accesibilidad y orientación inicial:</strong> una vía de acceso sencilla para personas que desean conocer más sobre una lesión cutánea.</li>
                  <li><strong>Información comprensible:</strong> presentación clara del tipo probable de lesión, el nivel de confianza y una explicación sencilla.</li>
                  <li><strong>Apoyo a profesionales y clínicas:</strong> herramienta de soporte para la evaluación inicial, la educación del paciente o la identificación de casos que requieren revisión especializada.</li>
                  <li><strong>Potencial para la prevención:</strong> promover una actitud más activa frente a los cambios en la piel y la consulta oportuna.</li>
                </ol>
              </div>

              <div>
                <h4 className="mb-2 text-base font-bold text-foreground">Limitaciones y consideraciones éticas</h4>
                <p>
                  El desempeño de un modelo CNN depende de la calidad y diversidad de los datos de entrenamiento, las condiciones de captura, la representación de distintos tonos de piel y la similitud entre las imágenes analizadas y aquellas utilizadas durante su desarrollo. No se deben atribuir a SkinScan porcentajes de precisión, sensibilidad o especificidad sin una validación formal.
                </p>
                <p className="mt-3">
                  La plataforma también debe considerar la privacidad y seguridad de las fotografías, el consentimiento informado, la gestión responsable de datos personales y la comunicación clara de sus alcances.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-base font-bold text-foreground">Conclusión</h4>
                <p>
                  La brecha dermatológica en el Perú evidencia la necesidad de explorar soluciones que complementen, y no sustituyan, los servicios de salud existentes. SkinScan propone aprovechar la inteligencia artificial y las redes neuronales convolucionales para ofrecer una evaluación preliminar de lesiones cutáneas, acompañada de información comprensible para usuarios y profesionales. Su valor definitivo dependerá de la validación técnica, clínica y ética, así como de su integración responsable en los procesos de atención.
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-lg border border-warning-foreground/20 bg-warning-soft px-4 py-3 text-sm leading-6 text-warning-foreground">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              <p>
                <strong>Exención de responsabilidad:</strong> SkinScan no reemplaza el diagnóstico médico profesional. Sus resultados son orientativos y no deben utilizarse para confirmar enfermedades, iniciar tratamientos ni retrasar una consulta médica.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function SkinScanPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundAudio src={teamAudio} />
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:flex lg:px-8">
          <div className="min-w-0"><Logo /></div>
          <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <div className="hidden items-center gap-2 sm:flex lg:ml-4">
            <Button asChild variant="ghost" size="sm"><a href="#acceso">Iniciar sesión</a></Button>
            <Button asChild size="sm"><a href="#planes">Comenzar ahora</a></Button>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 sm:hidden">
            <nav className="flex flex-col" aria-label="Navegación móvil">
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 text-sm font-semibold">{label}</a>)}
              <div className="mt-4 grid grid-cols-2 gap-2"><Button asChild variant="outline" size="sm"><a href="#acceso">Iniciar sesión</a></Button><Button asChild size="sm"><a href="#planes">Comenzar ahora</a></Button></div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative border-b border-border">
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-brand-teal-soft lg:block" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-brand-teal-soft px-3 py-1.5 text-xs font-bold text-primary"><Sparkles className="size-3.5" /> Tecnología al servicio del cuidado de tu piel</div>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">Una primera orientación para entender mejor tu piel.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Sube una fotografía de una lesión cutánea y recibe una evaluación preliminar con inteligencia artificial, explicada de forma simple y responsable.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg"><a href="#planes">Comenzar ahora <ArrowRight /></a></Button>
                <Button asChild variant="outline" size="lg"><a href="#como-funciona">Ver cómo funciona</a></Button>
              </div>
              <div className="mt-8 flex max-w-xl items-start gap-3 border-l-2 border-brand-blue bg-brand-blue-soft px-4 py-3 text-sm leading-6 text-foreground">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                <p><strong>SkinScan no reemplaza el diagnóstico médico profesional.</strong> Es una herramienta de orientación preliminar.</p>
              </div>
            </div>
            <AnalysisMockup />
          </div>
        </section>

        <section aria-label="SkinScan en acción" className="bg-background py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-center text-xs font-bold uppercase text-primary">Imagen referencial</p>
                <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={platformImage}
                    alt="Captura de pantalla de referencia de la plataforma SkinScan"
                    width={1672}
                    height={941}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
              <div>
                <p className="mb-3 text-center text-xs font-bold uppercase text-primary">Póster del producto</p>
                <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={posterImage}
                    alt="Póster de SkinScan: tu piel habla. Aprende a escucharla a tiempo."
                    width={1086}
                    height={1448}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <AudioPlayer src={teamAudio} />
            </div>
          </div>
        </section>

        <section className="bg-surface-warm py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <SectionHeading eyebrow="Cuidarse empieza por observar" title="Cuando notas un cambio, mereces información clara." text="Una mancha nueva o una lesión que cambia puede generar dudas. Buscar respuestas en internet suele aumentar la preocupación y no siempre ayuda a saber qué hacer." />
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {[{ n: "01", t: "Observa", d: "Reconoce y registra lo que ha cambiado." }, { n: "02", t: "Comprende", d: "Recibe una explicación sencilla y orientativa." }, { n: "03", t: "Decide", d: "Valora si conviene consultar a un profesional." }, { n: "04", t: "Da seguimiento", d: "Mantén organizada la evolución visual." }].map((item) => (
                <div key={item.n} className="bg-background p-6"><span className="text-xs font-bold text-primary">{item.n}</span><h3 className="mt-6 font-display text-2xl font-semibold">{item.t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading center eyebrow="Cómo funciona" title="Tres pasos. Una orientación más clara." text="Una experiencia sencilla diseñada para ayudarte a pasar de la duda a una decisión informada." />
            <div className="relative mt-14 grid gap-8 md:grid-cols-3">
              <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t border-dashed border-primary/40 md:block" />
              {[{ icon: Upload, n: "1", title: "Sube una imagen", text: "Toma una foto nítida, bien iluminada y sin filtros, con la lesión centrada." }, { icon: BrainCircuit, n: "2", title: "La IA la analiza", text: "El modelo compara patrones visuales para identificar el tipo probable de lesión." }, { icon: FileText, n: "3", title: "Recibe orientación", text: "Revisa el resultado preliminar, su confianza y una explicación en lenguaje simple." }].map((step) => (
                <article key={step.n} className="relative text-center">
                  <div className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-[var(--shadow-button)]"><step.icon className="size-5" /></div>
                  <span className="mt-5 block text-xs font-bold text-primary">PASO {step.n}</span>
                  <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="beneficios" className="scroll-mt-20 border-y border-border bg-muted/40 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Beneficios" title="Tecnología útil, con criterio humano." text="SkinScan está pensado para informar, acompañar y facilitar el siguiente paso sin sustituir la atención profesional." />
            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => <IconCard key={title} icon={<Icon className="size-5" />} title={title}>{text}</IconCard>)}
            </div>
          </div>
        </section>

        <section id="para-quien" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading center eyebrow="Para quién" title="Una herramienta, distintas formas de cuidar." text="Diseñada para acompañar la observación personal y apoyar el trabajo de quienes cuidan la salud de otros." />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[{ icon: UserRound, title: "Personas", text: "Para resolver una primera duda, comprender mejor una lesión y saber cuándo buscar ayuda." }, { icon: Stethoscope, title: "Profesionales de salud", text: "Como apoyo preliminar para organizar casos y comunicar información de forma clara." }, { icon: Building2, title: "Clínicas y centros médicos", text: "Para integrar evaluaciones preliminares en flujos de atención y seguimiento." }].map(({ icon: Icon, title, text }, index) => (
                <article key={title} className={`rounded-lg border p-7 transition-transform hover:-translate-y-1 ${index === 1 ? "border-primary bg-brand-teal-soft" : "border-border bg-card"}`}>
                  <Icon className="size-7 text-primary" /><h3 className="mt-8 font-display text-3xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ArticleSection />

        <section id="planes" className="scroll-mt-20 bg-foreground py-20 text-background sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase text-primary">Planes</p><h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Empieza según tus necesidades.</h2><p className="mt-4 text-base leading-7 text-background/65">Accede a una orientación inicial o lleva SkinScan a tu práctica profesional.</p></div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {[{ name: "Gratis", audience: "Para uso personal", price: "Sin costo", features: ["Evaluaciones preliminares limitadas", "Resultado en lenguaje simple", "Orientación sobre próximos pasos"], cta: "Comenzar ahora", featured: false }, { name: "Profesional", audience: "Para profesionales de salud", price: "Consultar", features: ["Mayor volumen de evaluaciones", "Historial organizado", "Herramientas para seguimiento"], cta: "Solicitar información", featured: true }, { name: "Clínicas", audience: "Para equipos e instituciones", price: "A medida", features: ["Acceso para varios usuarios", "Gestión centralizada", "Acompañamiento para implementación"], cta: "Contactar", featured: false }].map((plan) => (
                <article key={plan.name} className={`relative rounded-lg border p-7 ${plan.featured ? "border-primary bg-background text-foreground" : "border-background/15 bg-background/5"}`}>
                  {plan.featured && <span className="absolute right-5 top-5 rounded-full bg-brand-teal-soft px-2.5 py-1 text-[10px] font-bold uppercase text-primary">Más elegido</span>}
                  <p className={`text-sm font-semibold ${plan.featured ? "text-primary" : "text-background/60"}`}>{plan.audience}</p><h3 className="mt-2 text-2xl font-bold">{plan.name}</h3><p className="mt-7 font-display text-4xl font-semibold">{plan.price}</p>
                  <ul className="mt-7 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" /> <span className={plan.featured ? "text-muted-foreground" : "text-background/75"}>{feature}</span></li>)}</ul>
                  <Button asChild variant={plan.featured ? "primary" : "light"} className="mt-8 w-full"><a href="#acceso">{plan.cta}</a></Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <SectionHeading eyebrow="Preguntas frecuentes" title="Lo importante, explicado con claridad." text="Conoce el alcance de SkinScan antes de realizar tu primera evaluación." />
            <div className="border-t border-border">
              {faqs.map(([question, answer], index) => (
                <details key={question} className="group border-b border-border py-1" open={index === 0}>
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left text-base font-bold marker:hidden">
                    <span className="min-w-0">{question}</span><ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              center
              eyebrow="Nuestro equipo"
              title="Integrantes del proyecto"
              text="El equipo detrás de SkinScan, presentando el prototipo de la plataforma."
            />
            <figure className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
              <img
                src={teamPhoto}
                alt="Integrantes del equipo de SkinScan presentando el prototipo del proyecto"
                width={1254}
                height={1254}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section id="acceso" className="scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl"><p className="text-xs font-bold uppercase text-primary-foreground/70">Empieza hoy</p><h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Convierte una duda en un siguiente paso.</h2><p className="mt-4 leading-7 text-primary-foreground/80">Realiza una evaluación preliminar de forma simple, privada y responsable.</p></div>
              <Button asChild variant="light" size="lg"><a href="#inicio">Comenzar ahora <ArrowRight /></a></Button>
            </div>
            <div className="mt-10 flex items-start gap-2 border-t border-primary-foreground/20 pt-5 text-sm text-primary-foreground/85"><ShieldCheck className="mt-0.5 size-4 shrink-0" /><strong>SkinScan no reemplaza el diagnóstico médico profesional.</strong></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
            <div><Logo /><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Orientación preliminar para comprender mejor las lesiones cutáneas y tomar decisiones informadas.</p></div>
            <div><h3 className="text-sm font-bold">Producto</h3><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#como-funciona" className="hover:text-primary">Cómo funciona</a><a href="#beneficios" className="hover:text-primary">Beneficios</a><a href="#planes" className="hover:text-primary">Planes</a></div></div>
            <div><h3 className="text-sm font-bold">Recursos</h3><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#preguntas" className="hover:text-primary">Preguntas frecuentes</a><a href="#articulos" className="hover:text-primary">Artículos</a><a href="#para-quien" className="hover:text-primary">Para profesionales</a><a href="#acceso" className="hover:text-primary">Contacto</a></div></div>
            <div><h3 className="text-sm font-bold">Legal</h3><div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><a href="#" className="hover:text-primary">Privacidad</a><a href="#" className="hover:text-primary">Términos de uso</a><a href="#" className="hover:text-primary">Uso responsable</a></div></div>
          </div>
          <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-6">
            <p className="min-w-0 text-xs leading-5 text-muted-foreground">© 2026 SkinScan. Hecho en Perú para el cuidado responsable de la piel.</p>
            <div className="flex shrink-0 gap-2">
              <a href="#" aria-label="SkinScan en LinkedIn" className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Linkedin className="size-4" /></a>
              <a href="#" aria-label="SkinScan en Instagram" className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Instagram className="size-4" /></a>
              <a href="#" aria-label="Comunidad SkinScan" className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"><UsersRound className="size-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}