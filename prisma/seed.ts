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
        "id": 25,
        "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
        "image": null,
        "options": [
            "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
            "Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
            "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
            "Chở người ngồi sau dưới 16 tuổi."
        ],
        "result": 1,
        "reason": "“Buông tay – Kéo đẩy – Quệt chân, dễ tai nạn, tuyệt đối cấm!”"
    },
    {
        "id": 26,
        "question": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
        "image": null,
        "options": [
            "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
            "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
        ],
        "result": 1,
        "reason": "Xuống dốc tay ga hợp lý, phanh trước phanh sau giảm tốc an toàn."
    },
    {
        "id": 27,
        "question": "Hành vi nào dưới đây bị nghiêm cấm?",
        "image": null,
        "options": [
            "Sử dụng xe đạp đi trên các tuyến quốc lộ.",
            "Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
            "Cả hai ý trên."
        ],
        "result": 2,
        "reason": "Không cấm đi xe đạp trên quốc lộ, nhưng rải vật nhọn hoặc đổ chất gây trơn trượt gây nguy hiểm sẽ bị cấm."
    },
    {
        "id": 28,
        "question": "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?",
        "image": null,
        "options": [
            "Biển báo hiệu đặt cố định.",
            "Biển báo hiệu tạm thời.",
            "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
        ],
        "result": 2,
        "reason": "Biển tạm thời = Ưu tiên xử lý tình huống giao thông bất thường, nên phải chấp hành trước."
    },
    {
        "id": 29,
        "question": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
        "image": "https://hoclaixemoto.comimages/415.jpg",
        "options": [
            "Biển 1.",
            "Biển 2."
        ],
        "result": 2,
        "reason": "Biển 1: Nhường đường dành cho người đi bộ - Biển 2: Báo hiệu thường có trẻ em ngang, trường học."
    },
    {
        "id": 30,
        "question": "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?",
        "image": null,
        "options": [
            "Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
            "Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
            "Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h."
        ],
        "result": 1,
        "reason": "Đáp án đúng: 1. Vì đây là tập hợp đầy đủ và chính xác các phương tiện và đối tượng không được phép đi vào đường cao tốc theo luật."
    },
    {
        "id": 31,
        "question": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
        "image": null,
        "options": [
            "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
            "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
            "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
            "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
        ],
        "result": 3,
        "reason": "Chiếu hậu có nghĩa là phía sau, gương chiếu hậu sẽ giúp bạn quan sát được phía sau cả bên phải lẫn bên trái."
    },
    {
        "id": 32,
        "question": "Biển nào báo hiệu \"Đường một chiều\"?",
        "image": "https://hoclaixemoto.comimages/438.jpg",
        "options": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        "result": 2,
        "reason": "Biển 1: Hướng đi thẳng phải theo (hình tròn nền xanh phải theo) - Biển 2: Đường 1 chiều. (Một = mập, chọn mũi tên mập hơn)"
    },
    {
        "id": 33,
        "question": "*Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
        "image": null,
        "options": [
            "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
            "Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
            "Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
        ],
        "result": 1,
        "reason": "Cứ đi xe mô tô, xe gắn máy: Phải đội mũ, cài quai = đúng luật."
    },
    {
        "id": 34,
        "question": "*Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
        "image": null,
        "options": [
            "Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
            "Hết niên hạn sử dụng.",
            "Cả hai ý trên."
        ],
        "result": 3,
        "reason": "Xe không kiểm định hoặc quá hạn = cấm."
    },
    {
        "id": 35,
        "question": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
        "image": null,
        "options": [
            "Đi về bên trái theo chiều đi của mình.",
            "Đi về bên phải theo chiều đi của mình.",
            "Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
        ],
        "result": 2,
        "reason": "Chậm (nhường) phải, nhanh (vượt) trái."
    },
    {
        "id": 36,
        "question": "Biển nào báo hiệu \"Cửa chui\"?",
        "image": "https://hoclaixemoto.comimages/380.jpg",
        "options": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        "result": 2,
        "reason": "Biển 1: Đường cầu vòng - Biển 2: Cửa chui - Biển 3: Đường hầm."
    },
    {
        "id": 37,
        "question": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
        "image": "https://hoclaixemoto.comimages/458.jpg",
        "options": [
            "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
            "Tiếp tục lưu thông với tốc độ bình thường.",
            "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
        ],
        "result": 3,
        "reason": "Trạm CSGT: Giảm tốc độ và không được vượt."
    },
    {
        "id": 38,
        "question": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
        "image": "https://hoclaixemoto.comimages/351.jpg",
        "options": [
            "Báo khoảng cách đến nơi cấm bóp còi.",
            "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
            "Báo cấm dùng còi có độ vang xa 500m."
        ],
        "result": 2,
        "reason": "Biển phụ báo hiệu chiều dài đoạn đường cấm bóp còi."
    },
    {
        "id": 39,
        "question": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
        "image": "https://hoclaixemoto.comimages/371.jpg",
        "options": [
            "Biển 1.",
            "Biển 2.",
            "Biển 3."
        ],
        "result": 1,
        "reason": "Biển 1: Nhường đường cho người đi bộ."
    },
    {
        "id": 40,
        "question": "* Hành vi đua xe trái phép bị xử lý như thế nào?",
        "image": null,
        "options": [
            "Chỉ bị nhắc nhở.",
            "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
        ],
        "result": 2,
        "reason": "Đua xe trái phép: Phạt hành chính hoặc hình sự."
    },
    {
        "id": 41,
        "question": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
        "image": null,
        "options": [
            "Khi xe chạy phía trước có tín hiệu vượt xe khác.",
            "Khi phía trước có xe chạy ngược chiều.",
            "Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
            "Khi xe sau có tín hiệu vượt bên phải."
        ],
        "result": 3,
        "reason": "Nhường xe sau vượt khi đủ điều kiện an toàn."
    },
    {
        "id": 42,
        "question": "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?",
        "image": "https://hoclaixemoto.comimages/308.jpg",
        "options": [
            "Biển 1 và biển 2.",
            "Biển 1 và biển 3.",
            "Biển 2 và biển 3.",
            "Cả ba biển."
        ],
        "result": 1,
        "reason": "Cấm mô tô (B1) và cấm ô tô (B2) đều cấm xe 3 bánh."
    },
    {
        "id": 43,
        "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
        "image": null,
        "options": [
            "Xe ô tô; máy kéo; xe mô tô hai bánh... xe đạp, xe đạp điện.",
            "Xe ô tô; rơ moóc... xe mô tô, xe gắn máy và các loại xe tương tự."
        ],
        "result": 2,
        "reason": "Xe cơ giới chọn câu có 'tương tự' ở cuối."
    },
    {
        "id": 44,
        "question": "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?",
        "image": null,
        "options": [
            "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3...",
            "Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3...",
            "Cả hai ý trên."
        ],
        "result": 3,
        "reason": "Hạng A bao gồm cả phân khối thấp và phân khối lớn."
    },
    {
        "id": 45,
        "question": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
        "image": "https://hoclaixemoto.comimages/328.jpg",
        "options": [
            "Biển 1.",
            "Biển 2.",
            "Cả hai biển."
        ],
        "result": 1,
        "reason": "Biển 1 cấm rẽ trái nhưng cho phép quay đầu."
    },
    {
        "id": 46,
        "question": "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại, người lái xe phải thực hiện như thế nào?",
        "image": null,
        "options": [
            "Giảm tốc độ để bảo đảm an toàn...",
            "Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại.",
            "Tăng tốc độ để cách xa xe phía sau..."
        ],
        "result": 2,
        "reason": "Muốn dùng điện thoại phải dừng xe nơi quy định."
    },
    {
        "id": 47,
        "question": "* Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?",
        "image": null,
        "options": [
            "Bấm còi liên tục...",
            "Rú ga liên tục...",
            "Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
        ],
        "result": 3,
        "reason": "Báo hiệu bằng đèn hoặc còi để xin vượt."
    },
    {
        "id": 48,
        "question": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
        "image": null,
        "options": [
            "Đăng ký xe...",
            "GPLX, đăng kiểm, bảo hiểm...",
            "Xuất trình qua định danh điện tử VNeID...",
            "Cả ba ý trên."
        ],
        "result": 4,
        "reason": "Cần mang đủ giấy tờ bản cứng hoặc tích hợp VNeID."
    },
    {
        "id": 49,
        "question": "Xe nào được quyền đi trước trong trường hợp này?",
        "image": "https://hoclaixemoto.comimages/495.jpg",
        "options": [
            "Xe mô tô.",
            "Xe cứu thương đi làm nhiệm vụ cấp cứu."
        ],
        "result": 2,
        "reason": "Xe ưu tiên (cứu thương) được đi trước."
    }
];

async function main() {
    console.log('🚀 Đang bắt đầu nạp Bộ đề số 2 - Hạng A1...');

    const examSet = await prisma.examSet.create({
        data: {
            name: 'Bộ đề thi số 2 - Hạng A1',
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
                        isCorrect: idx === (item.result - 1)
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