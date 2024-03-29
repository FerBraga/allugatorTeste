CREATE DATABASE  IF NOT EXISTS `meuDB` ;
USE `meuDB`;

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price`DECIMAL(9,2) NOT NULL,
  `image` VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` VALUES
  (1,'iPhone 12', '64GB iOS 5G Wi-Fi Tela 6.1'' Câmera 12MP - Verde', 2445.71, 'http://localhost:3001/images/iPhone+12.png'),
  (2,'iPhone 13', '128GB iOS 5G Wi-Fi Tela 6.1'' Câmera 12MP - Vermelho', 3197.00, 'http://localhost:3001/images/iPhone+13.png'),
  (3,'iPhone 13 Pro', '256GB iOS 5G Wi-Fi Tela 6.1'' Câmera 12MP - Azul', 4397.07, 'http://localhost:3001/images/iPhone+13+Pro.png'),
  (4,'iPhone 13 Pro Max','256GB iOS 5G Wi-Fi Tela 6.7'' Câmera 12MP - Branco', 4397.08, 'http://localhost:3001/images/iPhone+13+Pro+Max.png'),
  (5,'Apple Watch', 'Apple Watch Series 3 (GPS), em alumínio com Pulseira esportiva branca', 1050.00, 'http://localhost:3001/images/AppleWatch.jpg');


DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password`VARCHAR(90) NOT NULL,
  `role` VARCHAR(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` VALUES
  (1,'Carlos Silva','carlos@email.com', '78f1520584e98b01dd924fc8e99970be', 'admin'),
  (2,'Joana Teixeira','joana@email.com', 'a771604bee69896975073c0821ef40f0', 'client');

CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`),

) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `sales` VALUES (1, 1, 1);