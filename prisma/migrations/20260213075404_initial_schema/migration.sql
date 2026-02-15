-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'NONE');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('THEORY', 'SIMULATION');

-- CreateEnum
CREATE TYPE "LicenseType" AS ENUM ('A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'C', 'D', 'E', 'F');

-- CreateEnum
CREATE TYPE "QuestionGroup" AS ENUM ('CONCEPTS_RULES', 'CULTURE_ETHICS', 'TECHNIQUES', 'STRUCTURE_REPAIR', 'TRAFFIC_SIGNS', 'TRAFFIC_FIGURES');

-- CreateEnum
CREATE TYPE "TestStatus" AS ENUM ('PASS', 'FAIL');

-- CreateEnum
CREATE TYPE "BookmarkType" AS ENUM ('WRONG_AUTO', 'MANUAL');

-- CreateEnum
CREATE TYPE "TrafficSignGroup" AS ENUM ('PROHIBITION', 'DANGER', 'COMMAND', 'INSTRUCTION', 'AUXILIARY', 'MARKING');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "full_name" TEXT,
    "avatar_url" TEXT,
    "refresh_token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "verification_code" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "media_url" TEXT,
    "media_type" "MediaType" NOT NULL DEFAULT 'NONE',
    "question_type" "QuestionType" NOT NULL DEFAULT 'THEORY',
    "group" "QuestionGroup" NOT NULL DEFAULT 'CONCEPTS_RULES',
    "is_paralysis" BOOLEAN NOT NULL DEFAULT false,
    "explanation" TEXT,
    "tip" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "traffic_sign_id" INTEGER,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "is_correct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "traffic_signs" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT NOT NULL,
    "group" "TrafficSignGroup" NOT NULL,

    CONSTRAINT "traffic_signs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exam_sets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "license_type" "LicenseType" NOT NULL,
    "description" TEXT,

    CONSTRAINT "exam_sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exam_set_questions" (
    "exam_set_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,

    CONSTRAINT "exam_set_questions_pkey" PRIMARY KEY ("exam_set_id","question_id")
);

-- CreateTable
CREATE TABLE "test_history" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "exam_set_id" INTEGER,
    "license_type" "LicenseType" NOT NULL,
    "score" INTEGER NOT NULL,
    "total_questions" INTEGER NOT NULL,
    "status" "TestStatus" NOT NULL,
    "is_paralysis_failed" BOOLEAN NOT NULL DEFAULT false,
    "duration_seconds" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_details" (
    "id" SERIAL NOT NULL,
    "test_history_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "selected_answer_id" INTEGER,
    "is_correct" BOOLEAN NOT NULL,

    CONSTRAINT "test_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_bookmarks" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "bookmark_type" "BookmarkType" NOT NULL,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "general_study_tips" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "licenseType" "LicenseType",

    CONSTRAINT "general_study_tips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "questions_group_idx" ON "questions"("group");

-- CreateIndex
CREATE INDEX "questions_is_paralysis_idx" ON "questions"("is_paralysis");

-- CreateIndex
CREATE UNIQUE INDEX "traffic_signs_code_key" ON "traffic_signs"("code");

-- CreateIndex
CREATE INDEX "test_history_user_id_idx" ON "test_history"("user_id");

-- CreateIndex
CREATE INDEX "test_details_question_id_is_correct_idx" ON "test_details"("question_id", "is_correct");

-- CreateIndex
CREATE UNIQUE INDEX "user_bookmarks_user_id_question_id_bookmark_type_key" ON "user_bookmarks"("user_id", "question_id", "bookmark_type");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_traffic_sign_id_fkey" FOREIGN KEY ("traffic_sign_id") REFERENCES "traffic_signs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exam_set_questions" ADD CONSTRAINT "exam_set_questions_exam_set_id_fkey" FOREIGN KEY ("exam_set_id") REFERENCES "exam_sets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exam_set_questions" ADD CONSTRAINT "exam_set_questions_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_history" ADD CONSTRAINT "test_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_history" ADD CONSTRAINT "test_history_exam_set_id_fkey" FOREIGN KEY ("exam_set_id") REFERENCES "exam_sets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_details" ADD CONSTRAINT "test_details_test_history_id_fkey" FOREIGN KEY ("test_history_id") REFERENCES "test_history"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_details" ADD CONSTRAINT "test_details_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_details" ADD CONSTRAINT "test_details_selected_answer_id_fkey" FOREIGN KEY ("selected_answer_id") REFERENCES "answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
