import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1751996779970 implements MigrationInterface {
    name = 'Migrations1751996779970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "questions" (
                "id" SERIAL NOT NULL,
                "text" character varying NOT NULL,
                CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "questions"
        `);
    }

}
