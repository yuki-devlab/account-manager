import type { SecondaryStorage } from "better-auth";
import { redis } from "@/lib/redis";

export const redisSecondaryStorage: SecondaryStorage = {
	async get(key) {
		return await redis.get(key);
	},
	async getAndDelete(key) {
		return await redis.getdel(key);
	},
	async increment(key, ttl) {
		const result = await redis
			.multi()
			.incr(key)
			.expire(key, ttl, "NX")
			.exec<[number, boolean]>();

		return result[0];
	},
	async set(key, value, ttl) {
		if (ttl) {
			await redis.set(key, value, {
				ex: ttl,
			});
		} else {
			await redis.set(key, value);
		}
	},
	async delete(key) {
		await redis.del(key);
	},
};
