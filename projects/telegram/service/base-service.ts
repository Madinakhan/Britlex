export interface BaseService<T> {
	create(data: T): number;
	getById(id: number): T | null;
	updateById(update: T): T | null;
	deleteById(id: number): number;
}
