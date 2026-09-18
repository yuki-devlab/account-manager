CREATE TABLE `credential` (
	`id` text PRIMARY KEY,
	`user_id` text NOT NULL,
	`service_name` text NOT NULL,
	`category` text NOT NULL,
	`login_id` text NOT NULL,
	`password` text NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	CONSTRAINT `fk_credential_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
DROP INDEX IF EXISTS `account_userId_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS `session_userId_idx`;--> statement-breakpoint
CREATE INDEX `account_user_id_idx` ON `account` (`user_id`);--> statement-breakpoint
CREATE INDEX `credential_user_id_idx` ON `credential` (`user_id`);--> statement-breakpoint
CREATE INDEX `session_user_id_idx` ON `session` (`user_id`);