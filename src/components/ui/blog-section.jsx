import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const news = [
	{
		title: 'Cérémonie de remise des diplômes 2024',
		slug: '/news/1',
		description: 'Félicitations à nos diplômés ! Une cérémonie émouvante en présence des familles, professeurs et partenaires professionnels. Retour en images sur ce moment exceptionnel.',
		image: '/image-remise-diplome.jpg',
		category: 'Événement',
		categoryColor: 'bg-accent-500',
		date: '20 Mars 2024',
		readTime: '4 min',
		featured: true,
	},
	{
		title: 'Journée Portes Ouvertes 2024',
		slug: '/news/2',
		description: 'Venez découvrir nos formations et échanger avec nos équipes pédagogiques.',
		image: '/img-iut.jpg',
		category: 'Orientation',
		categoryColor: 'bg-primary-500',
		date: '15 Mars 2024',
		readTime: '3 min',
	},
	{
		title: 'Nouveaux équipements informatiques',
		slug: '/news/3',
		description: 'L\'IUT s\'équipe pour former aux technologies cloud et cybersécurité.',
		image: '/img-iut.jpg',
		category: 'Infrastructure',
		categoryColor: 'bg-lagoon-500',
		date: '28 Fév 2024',
		readTime: '4 min',
	},
	{
		title: 'Partenariat avec des entreprises locales',
		slug: '/news/4',
		description: '5 nouvelles conventions signées pour développer l\'alternance en Martinique.',
		image: '/image-remise-diplome.jpg',
		category: 'Partenariat',
		categoryColor: 'bg-secondary-500',
		date: '10 Fév 2024',
		readTime: '5 min',
	},
];

export function BlogSection() {
	const featuredNews = news[0];
	const secondaryNews = news.slice(1);

	return (
		<div className="w-full">
			{/* Label dans un container centré */}
			<div className="mx-auto max-w-7xl px-4">
				<motion.div 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-8"
				>
					<span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
						À la une
					</span>
				</motion.div>
			</div>

			{/* Actualité principale (Featured) - FULL WIDTH avec saignée */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.1 }}
				className="mb-12"
			>
				<Link to={featuredNews.slug} className="group block">
					<div className="relative h-[600px] overflow-hidden">
						{/* Image */}
						<img 
							src={featuredNews.image} 
							alt={featuredNews.title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						
						{/* Overlay gradient */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
						
						{/* Contenu */}
						<div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
							{/* Badge catégorie */}
							<span className={`inline-block ${featuredNews.categoryColor} text-white px-4 py-1 rounded-full text-sm font-semibold mb-4`}>
								{featuredNews.category}
							</span>
							
							{/* Titre */}
							<h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
								{featuredNews.title}
							</h3>
							
							{/* Description */}
							<p className="text-lg text-gray-200 mb-6 max-w-3xl line-clamp-2">
								{featuredNews.description}
							</p>
							
							{/* Meta info */}
							<div className="flex items-center gap-6 text-gray-300 text-sm">
								<div className="flex items-center gap-2">
									<FiCalendar className="w-4 h-4" />
									<span>{featuredNews.date}</span>
								</div>
								<div className="flex items-center gap-2">
									<FiClock className="w-4 h-4" />
									<span>{featuredNews.readTime} de lecture</span>
								</div>
								<div className="flex items-center gap-2 text-primary-300 font-semibold group-hover:gap-3 transition-all">
									<span>Lire la suite</span>
									<FiArrowRight className="w-5 h-5" />
								</div>
							</div>
						</div>
					</div>
				</Link>
			</motion.div>

			{/* Actualités secondaires - Container centré */}
			<div className="mx-auto max-w-7xl px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{secondaryNews.map((item, index) => (
					<motion.div
						key={item.slug}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 * (index + 2) }}
					>
						<Link to={item.slug} className="group block">
							<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
								{/* Image */}
								<div className="relative h-48 overflow-hidden">
									<img 
										src={item.image} 
										alt={item.title}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
									
									{/* Badge catégorie */}
									<span className={`absolute top-4 left-4 ${item.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
										{item.category}
									</span>
								</div>
								
								{/* Contenu */}
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
										{item.title}
									</h3>
									
									<p className="text-gray-600 text-sm mb-4 line-clamp-2">
										{item.description}
									</p>
									
									{/* Meta info */}
									<div className="flex items-center gap-4 text-gray-500 text-xs">
										<div className="flex items-center gap-1">
											<FiCalendar className="w-3 h-3" />
											<span>{item.date}</span>
										</div>
										<div className="flex items-center gap-1">
											<FiClock className="w-3 h-3" />
											<span>{item.readTime}</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
				</motion.div>
				))}
			</div>
		</div>
	</div>
	);
}
