const quotes = [
  {
    quote: '행복한지 따져보는 건 우울해지는 지름길이야',
    author: '우리의 20세기',
  },
  {
    quote: '넌 도전했고 도전에는 용기가 필요하지, 네가 자랑스럽구나',
    author: '리틀 미스 선샤인(Little Miss Sunshine)',
  },
  {
    quote: '길은 모두에게 열려있지만 모두가 그 길을 가질 수 있는 건 아니다',
    author: '인턴',
  },
  {
    quote: '단지 두려움 때문에 좋아하는 일을 포기하지마',
    author: '씽(Sing)',
  },
  {
    quote: '사람과 사람의 관계가 시작되는 건, 서로 다름을 인정하는 것부터이다.',
    author: '완벽한 타인',
  },
  {
    quote: '내가 좋아하는 사람이 나를 좋아해 주는 건 기적이란다',
    author: '어린왕자',
  },
  {
    quote: '역경을 이겨내고 핀 꽃이 가장 아름다운 꽃이다',
    author: '뮬란',
  },
  {
    quote: '때로는 진짜 딱 20초만 창피해도 용기를 내는거야. 그럼 장담하건대 상상도 못 할 멋진 일이 생길거야',
    author: '우리는 동물원을 샀다',
  },
  {
    quote: '소중한 순간이 오면 따지지 말고 누릴 것 우리에게 내일이 있으리란 보장은 없으니까',
    author: '창문넘어 도망친 100세 노인',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

console.log(todaysQuote)
quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
