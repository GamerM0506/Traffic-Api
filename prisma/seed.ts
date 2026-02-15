import { PrismaClient, LicenseType, QuestionGroup, MediaType } from '@prisma/client';
import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});
const a1Data = [
    {
        "id": 0,
        "question": "Biển này có ý nghĩa như thế nào?",
        "image": "https://hoclaixemoto.com/images/358.jpg",
        "options": ["Cấm dừng xe về hướng bên trái.", "Cấm dừng và đỗ xe theo hướng bên phải.", "Được phép đỗ xe và dừng xe theo hướng bên phải."],
        "result": 1,
        "reason": "Cấm dừng và đỗ xe theo hướng bên phải."
    },
    {
        "id": 1,
        "question": "Biển nào báo hiệu \"Giao nhau có tín hiệu đèn\"?",
        "image": "https://hoclaixemoto.com/images/374.jpg",
        "options": ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
        "result": 2,
        "reason": "Biển 3."
    },
    {
        "id": 2,
        "question": "Biển nào dưới đây là biển \"Cầu hẹp\"?",
        "image": "https://hoclaixemoto.com/images/406.jpg",
        "options": ["Biển 1.", "Biển 2.", "Biển 3."],
        "result": 1,
        "reason": "Biển 2."
    },
    {
        "id": 3,
        "question": "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?",
        "image": null,
        "options": ["Để điều khiển xe chạy về phía trước.", "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.", "Để điều khiển xe chạy lùi.", "Ý 1 và ý 2."],
        "result": 3,
        "reason": "Ý 1 và ý 2."
    },
    {
        "id": 4,
        "question": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
        "image": null,
        "options": ["Là người điều khiển phương tiện tham gia giao thông đường bộ.", "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.", "Là người tham gia giao thông đường bộ."],
        "result": 1,
        "reason": "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ."
    },
    {
        "id": 5,
        "question": "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?",
        "image": null,
        "options": ["Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.", "Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp."],
        "result": 0,
        "reason": "Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác."
    },
    {
        "id": 6,
        "question": "Biển báo này có ý nghĩa như thế nào?",
        "image": "https://hoclaixemoto.com/images/339.jpg",
        "options": ["Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.", "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."],
        "result": 0,
        "reason": "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h."
    },
    {
        "id": 7,
        "question": "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
        "image": null,
        "options": ["Không được vượt.", "Được phép vượt ở phần đường dành cho người đi bộ qua đường.", "Được vượt khi bảo đảm an toàn."],
        "result": 2,
        "reason": "Được vượt khi bảo đảm an toàn."
    },
    {
        "id": 8,
        "question": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
        "image": null,
        "options": ["Xăng và dầu diesel.", "Xăng sinh học và khí sinh học.", "Ý 1 và ý 2."],
        "result": 1,
        "reason": "Xăng sinh học và khí sinh học."
    },
    {
        "id": 9,
        "question": "Số 50 ghi trên biển báo dưới đây có ý nghĩa như thế nào?",
        "image": "https://hoclaixemoto.com/images/40.jpg",
        "options": ["Tốc độ tối đa các xe cơ giới được phép chạy.", "Tốc độ tối thiểu các xe cơ giới được phép chạy."],
        "result": 0,
        "reason": "Tốc độ tối đa các xe cơ giới được phép chạy."
    },
    {
        "id": 10,
        "question": "Biển nào cấm các phương tiện rẽ trái?",
        "image": "https://hoclaixemoto.com/images/322.jpg",
        "options": ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3.", "Cả ba biển."],
        "result": 0,
        "reason": "Biển 1 và 2."
    },
    {
        "id": 11,
        "question": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
        "image": null,
        "options": ["Đi trên làn đường bên phải trong cùng.", "Đi trên làn đường bên trái.", "Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."],
        "result": 1,
        "reason": "Đi trên làn đường bên trái."
    },
    {
        "id": 12,
        "question": "Hai biển này có ý nghĩa như thế nào?",
        "image": "https://hoclaixemoto.com/images/381.jpg",
        "options": ["Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.", "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.", "Nơi đường sắt giao nhau với đường bộ."],
        "result": 0,
        "reason": "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn."
    },
    {
        "id": 13,
        "question": "Theo hướng mũi tên, những hướng nào xe gắn máy được phép đi?",
        "image": "https://hoclaixemoto.com/images/507.jpg",
        "options": ["Cả ba hướng.", "Chỉ hướng 1 và 3.", "Chỉ hướng 1."],
        "result": 0,
        "reason": "Cả ba hướng."
    },
    {
        "id": 14,
        "question": "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?",
        "image": null,
        "options": ["Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.", "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.", "Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."],
        "result": 1,
        "reason": "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường."
    },
    {
        "id": 15,
        "question": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
        "image": null,
        "options": ["Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.", "Xe xuống dốc phải nhường đường cho xe lên dốc.", "Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.", "Cả ba ý trên."],
        "result": 3,
        "reason": "Cả ba ý trên."
    },
    {
        "id": 16,
        "question": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
        "image": null,
        "options": ["Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.", "Bấm còi liên tục để các xe khác nhường đường.", "Bấm còi to khi đi qua khu vực đông dân cư.", "Không cần dùng còi, tránh gây tiếng ồn là văn minh."],
        "result": 0,
        "reason": "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định."
    },
    {
        "id": 17,
        "question": "* Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
        "image": null,
        "options": ["Bị nghiêm cấm.", "Không bị nghiêm cấm.", "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."],
        "result": 0,
        "reason": "Bị nghiêm cấm."
    },
    {
        "id": 18,
        "question": "*Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?",
        "image": null,
        "options": ["Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.", "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.", "Cả hai ý trên."],
        "result": 1,
        "reason": "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ."
    },
    {
        "id": 19,
        "question": "Biển nào báo hiệu \"Đường dành cho xe thô sơ\"?",
        "image": "https://hoclaixemoto.com/images/373.jpg",
        "options": ["Biển 1.", "Biển 2.", "Biển 3."],
        "result": 0,
        "reason": "Biển 1."
    },
    {
        "id": 20,
        "question": "Biển nào báo hiệu \"Giao nhau với đường hai chiều\"?",
        "image": "https://hoclaixemoto.com/images/401.jpg",
        "options": ["Biển 1.", "Biển 2.", "Biển 3."],
        "result": 1,
        "reason": "Biển 2."
    },
    {
        "id": 21,
        "question": "Biển nào báo hiệu \"Chú ý chướng ngại vật\"?",
        "image": "https://hoclaixemoto.com/images/402.jpg",
        "options": ["Biển 1.", "Biển 2 và biển 3.", "Biển 3."],
        "result": 1,
        "reason": "Biển 2 và biển 3."
    },
    {
        "id": 22,
        "question": "Xe nào được quyền đi trước trong trường hợp này?",
        "image": "https://hoclaixemoto.com/images/517.jpg",
        "options": ["Xe con.", "Xe mô tô."],
        "result": 1,
        "reason": "Xe mô tô."
    },
    {
        "id": 23,
        "question": "* Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?",
        "image": null,
        "options": ["Người chưa đủ tuổi theo quy định.", "Người không có giấy phép lái xe.", "Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.", "Cả ba ý trên."],
        "result": 3,
        "reason": "Cả ba ý trên."
    },
    {
        "id": 24,
        "question": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để bảo đảm an toàn?",
        "image": "https://hoclaixemoto.com/images/600.jpg",
        "options": ["Vượt về phía bên phải để đi tiếp.", "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.", "Vượt về phía bên trái để đi tiếp."],
        "result": 1,
        "reason": "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi."
    }
];

async function main() {
    console.log('🚀 Đang bắt đầu nạp Bộ đề số 1 - Hạng A1...');

    // 1. Tạo ExamSet
    const examSet = await prisma.examSet.create({
        data: {
            name: 'Bộ đề thi số 1 - Hạng A1',
            licenseType: LicenseType.A1,
            description: 'Bộ đề 25 câu hỏi mẫu dành cho hạng A1',
        },
    });

    for (const item of a1Data) {
        let group: QuestionGroup = QuestionGroup.CONCEPTS_RULES;
        if (item.question.includes('Biển')) group = QuestionGroup.TRAFFIC_SIGNS;
        if (item.question.includes('Xe nào') || item.image?.includes('507') || item.image?.includes('517') || item.image?.includes('600')) {
            group = QuestionGroup.TRAFFIC_FIGURES;
        }

        const isParalysis = item.question.startsWith('*');
        const cleanContent = item.question.replace(/^\*\s*/, ''); 

        const question = await prisma.question.create({
            data: {
                content: cleanContent,
                mediaUrl: item.image,
                mediaType: item.image ? MediaType.IMAGE : MediaType.NONE,
                group: group,
                isParalysis: isParalysis,
                explanation: item.reason,
                answers: {
                    create: item.options.map((opt, idx) => ({
                        content: opt,
                        isCorrect: idx === item.result
                    }))
                }
            }
        });

        await prisma.examSetQuestion.create({
            data: {
                examSetId: examSet.id,
                questionId: question.id,
            }
        });
    }

    console.log('✅ Đã nạp xong 25 câu hỏi vào Database Railway!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });