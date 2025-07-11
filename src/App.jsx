import React, { useState, useEffect } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      confirmEmail: confirmEmail,
      // 必要なら他のフィールドもここで拾う
    };

    console.log("送信されたデータ：", formData);
  
      fetch("https://personalinformationformback-6.onrender.com/api/personal-info"
, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }
      return response.json();
    })
    .then(data => {
      console.log('サーバーからの返答:', data);
     setIsSubmitted(true); // 成功時にここで切り替えよう
    })
    .catch(error => {
      console.error('エラー:', error);
      alert('送信中にエラーが発生しました。もう一度試してください。');
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/personal-info")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      {isSubmitted ? (
        <div style={{ textAlign: "center" }}>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOWOuoiCBS_3wGzPBV7DqMKCZbRsp9BrBk7BNzMa9beM5pEHcKEZMaIumk5-5SO064JpjKXJ_tq3OxCBR9a-o42TVzWfemdpAtbv6IH4jkCKPUPubA0U9mvOaA1a5-v_GvuxCaQLv4LV8/s800/mokuhyou_tassei_man.png"
            alt="Success"
            style={{ width: "200px", height: "200px" }}
          />
          <p style={{ fontSize: "20px", color: "green" }}>送信が完了しました！</p>
          <p style={{ fontSize: "16px" }}>ご記入いただいた内容は無事送信されました。<br></br>適正テストの受験、応募フォームの記入も期日までに忘れずにお願いいたします。</p>
        </div>
      ) : (
        <>
          <h1 style={{ fontSize: "40px" }}>
            ゴリゴリコーディング株式会社
            <br />
            個人情報入力フォーム
          </h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              gap: 20,
            }}
          >
            <div>
              <p>就活練習用として個人情報入力フォームを作ってみた。</p>
              <p>こんなだるい作業を何十社もやってる就活生の気持ちを体験してみよう。</p>
              <p style={{ color: "red", fontWeight: "bold" }}>
                ⚠️これは練習用です！本当の個人情報は入力しないでね。データは学習用や検証用に使うかもしれないから、自己責任でお願いします。
              </p>
            </div>

            <label>氏名</label>
            <input type="text" name="name" placeholder="山田太郎" required />

            <label>フリガナ</label>
            <input type="text" name="furigana" placeholder="ヤマダタロウ" required />

            <label>生年月日</label>
            <input type="date" name="birth" required />

            <label htmlFor="gender">性別</label>
            <select id="gender" name="gender" required>
              <option value="">選択してください</option>
              <option value="男性">男性</option>
              <option value="女性">女性</option>
              <option value="その他">その他</option>
              <option value="回答しない">回答しない</option>
            </select>

            <label>メールアドレス</label>
            <input type="email" name="email" placeholder="000@000" required />

            <label>電話番号</label>
            <input type="tel" name="tel" placeholder="000-0000-0000" />

            <label>住所</label>
            <input type="text" name="address" placeholder="東京都千代田区丸の内1-1-1" />

            <label>職業</label>
            <select name="job" required>
              <option value="">職業を選択してください</option>
              <option value="会社員">会社員</option>
              <option value="学生">学生</option>
              <option value="自営業">自営業</option>
              <option value="専業主婦（夫）">主婦</option>
              <option value="無職">無職</option>
              <option value="自宅警備員">自宅警備員</option>
              <option value="引きこもり">引きこもり</option>
              <option value="フリーター">フリーター</option>
              <option value="未来構想期間中">未来構想期間中</option>
              <option value="ニート">ニート</option>
              <option value="こどおじ">こどおじ</option>
              <option value="こどおば">こどおば</option>
              <option value="社会的非労働者">社会的非労働者</option>
              <option value="アンダーグラウンドワーカー">アンダーグラウンドワーカー</option>
              <option value="アルバイト">アルバイト</option>
              <option value="フリーランス">フリーランス</option>
              <option value="公務員">公務員</option>
              <option value="農業">農業</option>
              <option value="漁業">漁業</option>
              <option value="国会議員">国会議員</option>
              <option value="地方議員">地方議員</option>
              <option value="教師">教師</option>
              <option value="美容師">美容師</option>
              <option value="医療従事者">医療従事者</option>
              <option value="面接練習者">面接練習者</option>
              <option value="その他">その他</option>
            </select>

            <label>学歴</label>
            <input type="text" name="education" placeholder="〇〇大学 経済学部 卒業" />

            <label>資格</label>
            <input type="text" name="qualification" placeholder="簿記2級、TOEIC700点" />

            <label>趣味</label>
            <input type="text" name="hobby" placeholder="映画鑑賞、スポーツ観戦" />

            <label>特技</label>
            <input type="text" name="skill" placeholder="料理、写真撮影" />

            <label>SNSアカウント</label>
            <input type="text" name="sns" placeholder="Twitter: @example, Instagram: @example" />

            <label>ブログ・ウェブサイト</label>
            <input type="url" name="website" placeholder="https://example.com" />

            <label>希望連絡方法</label>
            <select name="contactMethod" required>
              <option value="">選択してください</option>
              <option value="メール">メール</option>
              <option value="電話">電話</option>
              <option value="LINE">LINE</option>
              <option value="その他">その他</option>
            </select>

            <label>連絡可能時間帯</label>
            <input type="text" name="contactTime" placeholder="平日 10:00-18:00" />

            <label>緊急連絡先</label>
            <input type="tel" name="emergencyContact" placeholder="000-0000-0000" />

            <label>健康状態</label>
            <textarea name="health" placeholder="特に問題がなければ「特になし」と入力してください" rows="4"></textarea>

            <label>アレルギー</label>
            <input type="text" name="allergy" placeholder="特に問題がなければ「なし」と入力してください" />

            <label>緊急時の対応</label>
            <textarea name="emergencyAction" placeholder="緊急時の対応方法を入力してください" rows="4"></textarea>

            <label>家族構成</label>
            <input type="text" name="family" placeholder="父、母、兄、姉" />

            <label>家族の健康状態</label>
            <textarea name="familyHealth" placeholder="特に問題がなければ「特になし」と入力してください" rows="4"></textarea>

            <label>家族のアレルギー</label>
            <input type="text" name="familyAllergy" placeholder="特に問題がなければ「なし」と入力してください" />

            <label>家族の緊急連絡先</label>
            <input type="tel" name="familyEmergencyContact" placeholder="000-0000-0000" />

            <label>趣味・特技</label>
            <input type="text" name="hobbySkill" placeholder="読書、旅行" />

            <label>自己紹介</label>
            <textarea name="selfIntro" placeholder="簡単な自己紹介を入力してください" rows="4"></textarea>

            <label>自己PR</label>
            <textarea name="selfPR" placeholder="自分の強みや経験をアピールしてください" rows="4"></textarea>

            <label>希望職種</label>
            <select id="desireJobType" name="DesireJobType" required>
              <option value="">選択してください</option>
              <option value="frontend">フロントエンドエンジニア（UI/UX設計、React等）</option>
              <option value="backend">バックエンドエンジニア（API設計、データベース管理）</option>
              <option value="fullstack">フルスタックエンジニア（前後両方担当）</option>
              <option value="devops">DevOpsエンジニア（CI/CD、インフラ管理）</option>
              <option value="data">データサイエンティスト（分析、機械学習）</option>
              <option value="pm">プロジェクトマネージャー（進捗管理、調整）</option>
              <option value="あいさつ担当">あいさつ担当</option>
              <option value="お茶出し">お茶出し</option>
              <option value="トイレ掃除">トイレ掃除</option>
              <option value="その他">その他</option>
            </select>

            <label>インターン経験</label>
            <select id="InternshipExperience" name="InternshipExperience" required>
              <option value="">選択してください</option>
              <option value="yes">はい</option>
              <option value="no">いいえ</option>
              <option value="Has work experience">社会人として働いた経験がある</option>
              <option value="これから頑張ります">これから頑張ります</option>
              <option value="興味もないです">興味もないです</option>
            </select>

            <label>プログラミング経験</label>
            <textarea
              name="programmingExperience"
              placeholder="GitHubアカウントや、個人で開発したアプリやサイトなどをご記入ください"
              rows="4"
            ></textarea>

            <label>最も得意とするプログラミング言語</label>
            <select id="ProgrammingLanguageUsed" name="ProgrammingLanguageUsed" required>
              <option value="">最も得意とするプログラミング言語を選択してください</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="PHP">PHP</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
              <option value="Go">Go</option>
              <option value="Swift">Swift</option>
              <option value="Kotlin">Kotlin</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Rust">Rust</option>
              <option value="Dart">Dart</option>
              <option value="R">R</option>
              <option value="Scala">Scala</option>
              <option value="Haskell">Haskell</option>
              <option value="Elixir">Elixir</option>
              <option value="Lua">Lua</option>
              <option value="Shell">Shell</option>
              <option value="SQL">SQL</option>
              <option value="other">その他</option>
            </select>

            <label>プログラミング経験年数</label>
            <select id="YearsOfExperience" name="YearsOfExperience" required>
              <option value="">プログラミング経験年数を選択してください</option>
              <option value="1年未満">1年未満</option>
              <option value="1-2年">1-2年</option>
              <option value="2-3年">2-3年</option>
              <option value="3-5年">3-5年</option>
              <option value="5年以上">5年以上</option>
              <option value="10年以上">10年以上</option>
              <option value="20年以上">20年以上</option>
              <option value="30年以上">30年以上</option>
              <option value="40年以上">40年以上</option>
              <option value="未経験">未経験</option>
            </select>

            <label>２番目に得意とするプログラミング言語</label>
            <select id="ProgrammingLanguageUsed2" name="ProgrammingLanguageUsed2" required>
              <option value="">２番目に得意なプログラミング言語を選択してください</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="PHP">PHP</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
              <option value="Go">Go</option>
              <option value="Swift">Swift</option>
              <option value="Kotlin">Kotlin</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Rust">Rust</option>
              <option value="Dart">Dart</option>
              <option value="R">R</option>
              <option value="Scala">Scala</option>
              <option value="Haskell">Haskell</option>
              <option value="Elixir">Elixir</option>
              <option value="Lua">Lua</option>
              <option value="Shell">Shell</option>
              <option value="SQL">SQL</option>
              <option value="other">その他</option>
            </select>

            <label>２番目に得意とするプログラミング言語の経験年数</label>
            <select id="YearsOfExperience2" name="YearsOfExperience2" required>
              <option value="">プログラミング経験年数を選択してください</option>
              <option value="1年未満">1年未満</option>
              <option value="1-2年">1-2年</option>
              <option value="2-3年">2-3年</option>
              <option value="3-5年">3-5年</option>
              <option value="5年以上">5年以上</option>
              <option value="10年以上">10年以上</option>
              <option value="20年以上">20年以上</option>
              <option value="30年以上">30年以上</option>
              <option value="40年以上">40年以上</option>
              <option value="未経験">未経験</option>
            </select>

            <label>使用したことのあるフレームワーク・ライブラリ</label>
            <textarea
              name="frameworks"
              placeholder="React, Vue.js, Angular, Django, Flaskなど"
              rows="4"
            ></textarea>

            <label>GitHubアカウント</label>
            <input type="text" name="github" placeholder="https://github.com/" />

            <label>その他の情報</label>
            <textarea
              name="others"
              placeholder="自分の強みや経験をアピールしてください"
              rows="4"
            ></textarea>

            <label>
              <input
                type="checkbox"
                name="confirmEmail"
                checked={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.checked)}
              />
              確認メールを希望する
            </label>

            <button
              type="submit"
              style={{
                marginTop: 10,
                padding: "10px 20px",
                fontSize: 16,
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              送信
            </button>
          </form>
        </>
      )}

      {/* APIデータの表示例 */}
      <div style={{ marginTop: 30 }}>
        {data === null ? (
          "Loading..."
        ) : data.length === 0 ? (
          "⚠️未記入の項目があります😱"
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>

        );
}

export default App;
