import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1752081215067 implements MigrationInterface {
    name = 'Migrations1752081215067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "teams"
            ADD "name" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "rounds"
            ADD "name" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "questions"
            ADD "points" integer NOT NULL DEFAULT '1'
        `);
        await queryRunner.query(`
            ALTER TABLE "answers"
            ADD "is_correct" boolean NOT NULL DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "answers"
            ADD "text" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD "created_on" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD "creator_id" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD "name" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "code" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD CONSTRAINT "UQ_6048911d5f44406ad25e44eaaed" UNIQUE ("code")
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "created_on" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "is_complete" boolean NOT NULL DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "name" character varying NOT NULL
        `);
        await queryRunner.query(`
            CREATE INDEX "games_code_idx" ON "games" ("code")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX "public"."games_code_idx"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "name"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "is_complete"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "created_on"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP CONSTRAINT "UQ_6048911d5f44406ad25e44eaaed"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "code"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP COLUMN "name"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP COLUMN "creator_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP COLUMN "created_on"
        `);
        await queryRunner.query(`
            ALTER TABLE "answers" DROP COLUMN "text"
        `);
        await queryRunner.query(`
            ALTER TABLE "answers" DROP COLUMN "is_correct"
        `);
        await queryRunner.query(`
            ALTER TABLE "questions" DROP COLUMN "points"
        `);
        await queryRunner.query(`
            ALTER TABLE "rounds" DROP COLUMN "name"
        `);
        await queryRunner.query(`
            ALTER TABLE "teams" DROP COLUMN "name"
        `);
    }

}
