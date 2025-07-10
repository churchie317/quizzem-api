import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1752083123393 implements MigrationInterface {
    name = 'Migrations1752083123393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "current_round_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "previous_round_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD "quiz_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "teams"
            ADD "game_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "answers"
            ADD "question_id" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "answers"
            ADD "team_id" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "questions"
            ADD "round_id" integer
        `);
        await queryRunner.query(`
            ALTER TABLE "rounds"
            ADD "quiz_id" uuid
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP CONSTRAINT "PK_b24f0f7662cf6b3a0e7dba0a1b4"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD CONSTRAINT "PK_b24f0f7662cf6b3a0e7dba0a1b4" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            CREATE INDEX "quizzes_id_idx" ON "quizzes" ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD CONSTRAINT "FK_32aac4b508d14c728118ef0b8ff" FOREIGN KEY ("current_round_id") REFERENCES "rounds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD CONSTRAINT "FK_16804421fe7f8a132409462f3a2" FOREIGN KEY ("previous_round_id") REFERENCES "rounds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "games"
            ADD CONSTRAINT "FK_28fcfd46c4bdf83a4c394668863" FOREIGN KEY ("quiz_id") REFERENCES "quizzes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "teams"
            ADD CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "answers"
            ADD CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "answers"
            ADD CONSTRAINT "FK_5c04afcc099c44346ae5bdedabb" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "questions"
            ADD CONSTRAINT "FK_a599a18bab4991d0ce781664de5" FOREIGN KEY ("round_id") REFERENCES "rounds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "rounds"
            ADD CONSTRAINT "FK_9faa27c4dedd8d37a87f118143c" FOREIGN KEY ("quiz_id") REFERENCES "quizzes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "rounds" DROP CONSTRAINT "FK_9faa27c4dedd8d37a87f118143c"
        `);
        await queryRunner.query(`
            ALTER TABLE "questions" DROP CONSTRAINT "FK_a599a18bab4991d0ce781664de5"
        `);
        await queryRunner.query(`
            ALTER TABLE "answers" DROP CONSTRAINT "FK_5c04afcc099c44346ae5bdedabb"
        `);
        await queryRunner.query(`
            ALTER TABLE "answers" DROP CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3"
        `);
        await queryRunner.query(`
            ALTER TABLE "teams" DROP CONSTRAINT "FK_596b51bc2c8663e8bc5f919db5b"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP CONSTRAINT "FK_28fcfd46c4bdf83a4c394668863"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP CONSTRAINT "FK_16804421fe7f8a132409462f3a2"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP CONSTRAINT "FK_32aac4b508d14c728118ef0b8ff"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."quizzes_id_idx"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP CONSTRAINT "PK_b24f0f7662cf6b3a0e7dba0a1b4"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "quizzes"
            ADD CONSTRAINT "PK_b24f0f7662cf6b3a0e7dba0a1b4" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "rounds" DROP COLUMN "quiz_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "questions" DROP COLUMN "round_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "answers" DROP COLUMN "team_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "answers" DROP COLUMN "question_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "teams" DROP COLUMN "game_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "quiz_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "previous_round_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "games" DROP COLUMN "current_round_id"
        `);
    }

}
