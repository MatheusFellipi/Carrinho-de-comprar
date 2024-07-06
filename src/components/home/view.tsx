import CardProducts from "@/components/home/card";
import styles from "./styles.module.css";

const data = [
  {
    name: "Notebook Gamer",
    rating: 2,
    description: "Notebook com alto desempenho, ideal para jogos.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 1,
    price: 4999.99,
  },
  {
    name: "Smartphone XYZ",
    rating: 2,
    description: "Smartphone com excelente câmera e bateria de longa duração.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 2,
    price: 1999.99,
  },
  {
    name: "Fone de Ouvido Bluetooth",
    rating: 2,
    description: "Fone de ouvido sem fio com cancelamento de ruído.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 3,
    price: 299.99,
  },
  {
    name: "Smart TV 4K",
    rating: 2,
    description: "Smart TV com resolução 4K e acesso a diversos aplicativos.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 4,
    price: 2499.99,
  },
  {
    name: "Console de Videogame",
    rating: 2,
    description: "Console de última geração com gráficos realistas.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 5,
    price: 2999.99,
  },
  {
    name: "Câmera Fotográfica",
    rating: 2,
    description:
      "Câmera digital com alta resolução e múltiplos modos de captura.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 6,
    price: 1599.99,
  },
  {
    name: "Smartwatch",
    rating: 2,
    description:
      "Relógio inteligente com monitoramento de saúde e notificações.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 7,
    price: 799.99,
  },
  {
    name: "Tablet",
    rating: 2,
    description:
      "Tablet com tela de alta resolução e grande capacidade de armazenamento.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 8,
    price: 1299.99,
  },
  {
    name: "Teclado Mecânico",
    rating: 2,
    description: "Teclado mecânico com iluminação RGB e teclas programáveis.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 9,
    price: 499.99,
  },
  {
    name: "Mouse Gamer",
    rating: 2,
    description: "Mouse gamer com alta precisão e botões personalizáveis.",
    logo_img:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    imag: [
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    ],
    id: 10,
    price: 299.99,
  },
];

export const HomeComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container_products}>
        {data.map((item) => (
          <div key={item.id}>
            <CardProducts data={item} />
          </div>
        ))}
      </div>
    </section>
  );
};
