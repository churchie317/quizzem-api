import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1752078656673 implements MigrationInterface {
    name = 'Migrations1752078656673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "rounds" (
                "id" SERIAL NOT NULL,
                CONSTRAINT "PK_9d254884a20817016e2f877c7e7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "teams" (
                "id" SERIAL NOT NULL,
                CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "quizzes" (
                "id" SERIAL NOT NULL,
                CONSTRAINT "PK_b24f0f7662cf6b3a0e7dba0a1b4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "answers" (
                "id" SERIAL NOT NULL,
                CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "games" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "games"
        `);
        await queryRunner.query(`
            DROP TABLE "answers"
        `);
        await queryRunner.query(`
            DROP TABLE "quizzes"
        `);
        await queryRunner.query(`
            DROP TABLE "teams"
        `);
        await queryRunner.query(`
            DROP TABLE "rounds"
        `);
    }

}
