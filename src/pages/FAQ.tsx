import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как проходит первая консультация?",
      answer:
        "Первая встреча — это знакомство. Мы обсудим ваш запрос, я расскажу о своем подходе к работе, мы определим цели терапии и составим предварительный план работы. Никакого давления — вы всегда можете решить, подходит ли вам такой формат работы.",
    },
    {
      question: "Сколько нужно сессий для решения проблемы?",
      answer:
        "Это очень индивидуально. Некоторые вопросы можно проработать за 3-5 встреч, другие требуют более длительной работы. После первых сессий мы сможем более точно оценить необходимое количество встреч.",
    },
    {
      question: "Конфиденциальность — как это работает?",
      answer:
        "Все, что происходит на сессии, остается между нами. Это основа доверительных отношений. Исключение составляют случаи, когда есть угроза жизни и здоровью — об этом я всегда предупреждаю заранее.",
    },
    {
      question: "Можно ли работать онлайн?",
      answer:
        "Да, онлайн-формат ничем не уступает очным встречам по эффективности. Мы используем безопасные платформы для видеосвязи. Главное — стабильный интернет и уединенное место для разговора.",
    },
    {
      question: "С какого возраста принимаете детей?",
      answer:
        "Я работаю с подростками с 12 лет. Для младших детей рекомендую детских психологов, которые специализируются на работе именно с этой возрастной группой.",
    },
    {
      question: "Что если мне не подойдет терапия?",
      answer:
        "Это нормально. Важно найти 'своего' специалиста. Если после нескольких встреч вы чувствуете, что контакт не установился, я помогу подобрать другого психолога, который больше подойдет под ваш запрос.",
    },
    {
      question: "Как часто нужно встречаться?",
      answer:
        "Обычно рекомендую встречаться раз в неделю, особенно в начале работы. По мере продвижения можно перейти на встречи раз в две недели. Частота обсуждается индивидуально.",
    },
    {
      question: "Работаете ли вы с парами?",
      answer:
        "Моя специализация — индивидуальная терапия. Для работы с парами рекомендую обратиться к семейному психологу, который специализируется именно на парной терапии.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
              Частые вопросы
            </h1>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы о психологической помощи
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Не нашли ответ на свой вопрос?
              </h3>
              <p className="text-gray-600 mb-6">
                Напишите мне, и я отвечу в течение суток
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors font-medium">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
