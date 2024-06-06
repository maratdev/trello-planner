'use client';

import { GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

import { COLORS } from '@/constants/color.constants';
import { MenuItem } from './MenuItem';
import { MENU } from './menu.data';

export function Sidebar() {
	return (
		<aside className="border-r border-r-border h-full bg-sidebar flex flex-col justify-between">
			<div>
				<Link
					href="/"
					className="flex items-center gap-2.5 p-layout border-b border-b-border"
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className="text-2xl font-bold relative">
						Trello App
					</span>
				</Link>
				<div className="p-3 relative">
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className="text-xs opacity-40 font-normal text-center p-layout">
				2024 &copy; With love from{' '}
				<a
					href="https://voredev.ru/"
					target="_blank"
					rel="noreferrer"
					className="hover:text-primary text-brand-300 transition-colors"
				>
					voredev
				</a>.
				<br /> All rights reserved.
			</footer>
		</aside>
	);
}
