dataSetVersion = "2023-06-19";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "Red Velvet", key: "redvelvet" },
      { name: "VIVIZ", key: "VIVIZ" },
      { name: "Oh My Girl", key: "omg" },
      { name: "Twice", key: "twice" },
      { name: "Blackpink", key: "blackpink" },
      { name: "Dreamcatcher", key: "dc" },
      { name: "(G)I-dle	", key: "gidle" },
      { name: "Itzy", key: "itzy" },
      { name: "Aespa", key: "aespa" },
      { name: "STAYC", key: "stayc" },
      { name: "Fromis_9", key: "fromis9" },
      { name: "Purple Kiss", key: "purplekiss" },
      { name: "Weeekly", key: "weeekly" },
      { name: "Ive", key: "ive"},
      { name: "Woo!ah!", key: "wooah" },
      { name: "LESSERAFIM", key: "lesserafim" },
	  { name: "NewJeans", key: "NewJeans" },
	  { name: "Billlie", key: "Billlie" },
	  { name: "Limelight", key: "Limelight" },
	  { name: "Kep1er", key: "Kep1er" },
	  { name: "TripleS", key: "TripleS" },
	  { name: "FIFTY FIFTY", key: "Fiftyfifty" },
	  { name: "CSR", key: "CSR" },
	  { name: "NMIXX", key: "NMIXX" },
	  { name: "ARTMS", key: "ARTMS" },
	  { name: "WJSN", key: "WJSN" },
	  { name: "Soloists / Misc.", key: "solo" },
    ]
  },
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to groups that debuted in certain generations.",
    checked: false,
    sub: [ 
      { name: "1st Gen", key: "gen1" },
      { name: "2nd Gen", key: "gen2" }, 
      { name: "3rd Gen", key: "gen3" }, 
      { name: "4th Gen", key: "gen4" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  
  {
    name: "JiU (Dreamcatcher)",
    img: "Sz1tPB8.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "SuA (Dreamcatcher)",
    img: "Imo1DT0.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Siyeon (Dreamcatcher)",
    img: "N7QqRPy.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Handong (Dreamcatcher)",
    img: "GjzqKbo.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Yoohyeon (Dreamcatcher)",
    img: "ckHdclc.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Dami (Dreamcatcher)",
    img: "wtyVNhX.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Gahyeon (Dreamcatcher)",
    img: "2kdqYw0.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Umji (VIVIZ)",
    img: "sJifOFc.png",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "SinB (VIVZ)",
    img: "GzoNhbh.png",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Yuju (solo)",
    img: "fk9hsag.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Eunha (VIVIZ)",
    img: "505pdBh.png",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Yerin (solo)",
    img: "00bfD0k.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Irene (Red Velvet)",
    img: "buMjekK.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Joy (Red Velvet)",
    img: "7VRAScN.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Seulgi (Red Velvet)",
    img: "KiU7gDO.jpg",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Wendy (Red Velvet)",
    img: "R0anfXf.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Yeri (Red Velvet)",
    img: "M36SzMD.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
  name: "Choerry (ARTMS)",
  img: "5jUHzYp.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chuu (solo)",
  img: "qSp6i66.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "HeeJin (ARTMS)",
  img: "sa5QO18.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jinsoul (ARTMS)",
  img: "Wc8EfXk.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Haseul (ARTMS)",
  img: "btBet8e.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Kim Lip (ARTMS)",
  img: "9u71FRD.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Goeun (Purple Kiss)",
  img: "Pji3zn3.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Dosie (Purple Kiss)",
  img: "gE7Oxn2.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ireh (Purple Kiss)",
  img: "Iyzyj8m.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuki (Purple Kiss)",
  img: "BvjqG8d.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaein (Purple Kiss)",
  img: "o5zSbQy.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Swan (Purple Kiss)",
  img: "3Qf53c9.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Nana (Woo!Ah!)",
  img: "LKllJ6c.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wooyeon (Woo!Ah!)",
  img: "dSWcMBK.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sora (Woo!Ah!)",
  img: "DWSZ7UC.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },  
  {
  name: "Lucy (Woo!Ah!)",
  img: "9jRtEM6.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Minseo (Woo!Ah!)",
  img: "HzFqPs0.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Gaeul (Ive)",
  img: "qOO3urb.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Leeseo (Ive)",
  img: "FKzvUfW.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Liz (Ive)",
  img: "bbAjH1n.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Rei (Ive)",
  img: "DNPQW4n.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jihan (Weeekly)",
  img: "qnZbs7Z.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Zoa (Weeekly)",
  img: "k3XmjAc.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Jaehee (Weeekly)",
  img: "2t4nE3T.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Soojin (Weeekly)",
  img: "Xuf8t0x.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Monday (Weeekly)",
  img: "kSy5mfB.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Soeun (Weeekly)",
  img: "4SQmHEk.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Eunbi (solo)",
  img: "u0LpS6J.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sakura (LESSERAFIM)",
  img: "RclcY50.png",
  opts: {
    group: [ "lesserafim" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Hyewon (solo)",
  img: "yi5zAyC.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yena (solo)",
  img: "5GRCIOw.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Chaeyeon (solo)",
  img: "xpo9tU3.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaewon (LESSERAFIM)",
  img: "gUU8bhZ.png",
  opts: {
    group: [ "lesserafim" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuri (solo)",
  img: "TMC2B6o.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
   {
  name: "Taeyeon (solo)",
  img: "5u4O7Mn.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen2"]  
    }
  },
  {
  name: "Yujin (Ive)",
  img: "CwVOyng.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wonyoung (ive)",
  img: "17yKvMj.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Soyeon ((G)-Idle)",
  img: "U4bpw40.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Miyeon ((G)-Idle)",
  img: "jIxNZue.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Minnie ((G)-Idle)",
  img: "E6KiHj8.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuqi ((G)-Idle)",
  img: "YJ6Vsuw.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Shuhua ((G)-Idle)",
  img: "SOQku7u.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yeji (ITZY)",
  img: "LtsEqzF.png",
  opts: {
    group: [ "itzy" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Lia (ITZY)",
  img: "i82EQww.png",
  opts: {
    group: [ "itzy" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ryujin (ITZY)",
  img: "Zn8fSZG.png",
  opts: {
    group: [ "itzy" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeryeong (ITZY)",
  img: "rq0yL7n.png",
  opts: {
    group: [ "itzy" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuna (ITZY)",
  img: "nIjJt7S.png",
  opts: {
    group: [ "itzy" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yubin (Oh My Girl)",
  img: "OdS059F.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Arin (Oh My Girl)",
  img: "nMMHQrD.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Hyojung (Oh My Girl)",
  img: "Ef32yJr.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Seunghee (Oh My Girl)",
  img: "DEBshZP.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mimi (Oh My Girl)",
  img: "qDjP3gx.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "YooA (Oh My Girl)",
  img: "vHvIZYc.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Giselle (Aespa)",
  img: "cFVrKHB.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Karina (Aespa)",
  img: "N45HAu8.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Ningning (Aespa)",
  img: "7Bgvev8.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Winter (Aespa)",
  img: "HdYdPWU.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Isa (STAYC)",
  img: "eaJdKRH.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "J (STAYC)",
  img: "2OK8EhX.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Seeun (STAYC)",
  img: "YzwRVl1.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sieun (STAYC)",
  img: "Y9VLrCj.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sumin (STAYC)",
  img: "dbBt0hm.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yoon (STAYC)",
  img: "r1vTwRm.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeyoung (Fromis_9)",
  img: "SfCuovX.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Hayoung (Fromis_9)",
  img: "FuLFedr.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jiheon (Fromis_9)",
  img: "iiQ8oMJ.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jisun (Fromis_9)",
  img: "Fk6bE6g.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Megan (Fromis_9)",
  img: "QiRobdZ.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Nagyung (Fromis_9)",
  img: "E1eiEPM.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Saerom (Fromis_9)",
  img: "VZPObo5.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Seoyeon (Fromis_9)",
  img: "YrIuzK5.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeyoung (Twice)",
  img: "Y665shI.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Dahyun (Twice)",
  img: "UMbf22e.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jeongyeon (Twice)",
  img: "8mQVxoU.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jihyo (Twice)",
  img: "PRyHnMV.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mina (Twice)",
  img: "p3m2SKa.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Momo (Twice)",
  img: "Znt75Vi.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Nayeon (Twice)",
  img: "1gOXo3l.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Sana (Twice)",
  img: "SdqhaPj.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Tzuyu (Twice)",
  img: "jEqHm6D.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jennie (Blackpink)",
  img: "VqfQYd5.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jisoo (Blackpink)",
  img: "FmdqBJI.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Lisa (Blackpink)",
  img: "s42JJRk.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
 {
  name: "Rosé (Blackpink)",
  img: "L97f0nM.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
    name: "Yunjin (Lesserafim)",
    img: "oJEMmBQ.png",
    opts: {
      group: [ "lesserafim" ],
      gen: ["gen4"]  
    }
  },
  {
    name: "Kazuha (Lesserafim)",
    img: "ouAFOsH.png",
    opts: {
      group: [ "lesserafim" ],
      gen: ["gen4"]  
      }
    },
    {
      name: "Eunchae (Lesserafim)",
      img: "eWkHUyC.png",
      opts: {
        group: [ "lesserafim" ],
        gen: ["gen4"]  
        }
    },    
	 {
    name: "Minji (NewJeans)",
    img: "0PR6mBl.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Hanni (NewJeans)",
    img: "Ay2DxPW.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Danielle (NewJeans)",
    img: "ZwhdBlg.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Haerin (NewJeans)",
    img: "nYxDW2S.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Hyein (NewJeans)",
    img: "tuzBJ8M.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Lily (NMIXX)",
    img: "pCNl2vm.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Bae (NMIXX)",
    img: "ckj9fuh.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Haewon (NMIXX)",
    img: "Pe4z0az.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Kyujin (NMIXX)",
    img: "I5e0LtY.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Sullyoon (NMIXX)",
    img: "4bCAIFK.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Jiwoo (NMIXX)",
    img: "cjzT1tv.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Miu (Limelight)",
    img: "V16g288.png",
    opts: {
      group: [ "Limelight" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Suhye (Limelight)",
    img: "BYoKgMz.png",
    opts: {
      group: [ "Limelight" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Gaeun (Limelight)",
    img: "GRKoDP9.png",
    opts: {
      group: [ "Limelight" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yujin (Kep1er)",
    img: "3wW8CWE.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mashiro (Kep1er)",
    img: "oAG4kJB.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hikaru (Kep1er)",
    img: "0QVhDdZ.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dayeon (Kep1er)",
    img: "SIs9OnW.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaehyun (Kep1er)",
    img: "QTovmbr.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Bahiyyih (Kep1er)",
    img: "zippJEK.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Xiaoting (Kep1er)",
    img: "8HDD42n.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Youngeun (Kep1er)",
    img: "r7oPHjT.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeseo (Kep1er)",
    img: "SJcDWar.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yubin (TripleS)",
    img: "aRvL00Q.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yooyeon (TripleS)",
    img: "WUTYvQq.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonji (TripleS)",
    img: "C5V6t6k.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Soomin (TripleS)",
    img: "TtiaN2p.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sohyun (TripleS)",
    img: "udHu9Qn.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seoyeon (TripleS)",
    img: "PwRbDtT.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Nien (TripleS)",
    img: "c3gtU6c.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Nakyoung (TripleS)",
    img: "ef43tZ4.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Kotone (TripleS)",
    img: "AuvFXf9.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Kaede (TripleS)",
    img: "3oEEL8P.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jiwoo (TripleS)",
    img: "8EA7aRu.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyerin (TripleS)",
    img: "Wl6phy5.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dahyun (TripleS)",
    img: "UIA1PM2.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaeyeon (TripleS)",
    img: "DJ3tKqx.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Xinyu (TripleS)",
    img: "GwB5GxO.png",
    opts: {
      group: [ "TripleS" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sio (FIFTY FIFTY)",
    img: "MPZTs23.png",
    opts: {
      group: [ "Fiftyfifty" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Keena (FIFTY FIFTY)",
    img: "NBbJsug.png",
    opts: {
      group: [ "Fiftyfifty" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Aran (FIFTY FIFTY)",
    img: "ocm6Wgx.png",
    opts: {
      group: [ "Fiftyfifty" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Saena (FIFTY FIFTY)",
    img: "dKPbwFg.png",
    opts: {
      group: [ "Fiftyfifty" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Duna (CSR)",
    img: "3FXEAha.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Geumhee (CSR)",
    img: "PDwdeny.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yuna (CSR)",
    img: "rdJbDOP.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeham (CSR)",
    img: "mqEZCz8.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sihyeon (CSR)",
    img: "zb4KzeN.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sua (CSR)",
    img: "wEfQfio.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seoyeon (CSR)",
    img: "qB27O42.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Tsuki (Billlie)",
    img: "bZW7GE4.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Haruna (Billlie)",
    img: "qwoUnWK.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Siyoon (Billlie)",
    img: "5A4D4ud.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sheon (Billlie)",
    img: "6LXn8nl.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Moon Sua (Billlie)",
    img: "IX5iu5T.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Suhyeon (Billlie)",
    img: "EkxWXDF.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Haram (Billlie)",
    img: "ymXGFBL.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Somi (solo)",
    img: "F4xD49d.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
    },
    {
    name: "Sohee (Alice / solo)",
    img: "F3iReOX.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "IU (solo)",
    img: "Xs3Nk8F.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen2"]  
      }
    },
	{
    name: "Yoojung (Weki Meki / solo)",
    img: "kBJUf37.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Doah (solo)",
    img: "Tz3QWrZ.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeoreum (WJSN)",
    img: "XAeHDRf.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Yeonjung (WJSN)",
    img: "tYYg5DL.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Soobin (WJSN)",
    img: "EMADucm.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Luda (WJSN)",
    img: "eEBF1Qu.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Seola (WJSN)",
    img: "xzvYUnz.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Exy (WJSN)",
    img: "zFkx7Tg.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Eunseo (WJSN)",
    img: "qdQ2C7F.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dayoung (WJSN)",
    img: "t8RqD1K.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dawon (WJSN)",
    img: "0myJ3eV.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Bona (WJSN)",
    img: "LFvm0lQ.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen4"]  
      }
    },
    
    
];
