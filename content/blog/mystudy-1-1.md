---
title: สรุปสิ่งที่ฉันเรียนในมหาลัยฯ (SS1 EP1)
description: "Statistic for Engineers: Experiment, Sample Space, Event"
dateWritten: "2020-07-04"
---

## การทดลอง (Experiment)

การทดลองก็ตามชื่อเลย คือ**ลองทำแม่งเลยค่ะ** 😂

แน่นอนว่าพอเราลองทำแล้วเนี่ย มันก็จะได้ผลลัพธ์บางอย่างออกมา เราก็จดไอตัวผลลัพธ์ไว้สวยๆ 📝 ซึ่งไอการทดลองพวกเนี้ย มันจะแบ่งออกไปได้ 2 แบบคือ:

**1. การทำลองแบบรู้ผลแน่นอน** ทุกคนรู้ เพื่อนฉันรู้ 😂

คือเจ้าตัวเนี้ยมันจะ=สามารถคำนวณเลขหรือให้คำตอบออกมาได้อย่างเดียว= เราก็เลยเรียกมันว่ารู้ผลแน่นอน เช่น:

- โยนลูกบอลขึ้นฟ้าแล้วมันต้องตกลงมาตามแรงโน้มถ่วงแน่นอน ⚽
- คำนวณโพรเจกต์ไทล์ลูกระเบิด 💣
- ฝากเงินแล้วได้ดอกเบี้ยตามกฎของธนาคารแน่นอน 💰

เป็นต้น อย่างที่บอกไป ของพวกนี้มันมีคำตอบแค่อย่างเดียวเลยไม่ค่อยน่าสนใจเท่าไร 🤷‍♀️

**2. การทดลองแบบสุ่ม** ตัวเนี้ยน่าสนใจ...

หลักการคือ มันจะหาค่าแน่นอนไม่ได้ แต่มันจะ=หาความน่าจะเป็นของคำตอบได้!=

เช่น โยนเหรียญเที่ยงตรง (โจทย์คลาสสิก)

การโยนเหรียญเที่ยงตรงเนี่ย เรารู้กันทุกคนว่าผลลัพธ์ที่มันจะออกมาจะมีแค่ 2 อย่างคือ "หัว" กับ "ก้อย" ซึ่ง=เราบอกไม่ได้หรอกว่าโยนรอบต่อไปในชีวิตมันจะได้อะไร แต่เราบอกได้ว่า "มันมีโอกาสออกหัวก้อยได้ 50/50"=

ซึ่งแน่นอนว่าเราเรียนสถิติไปเพื่อแก้ปัญหาเจ้าตัวการทดลองแบบที่ 2 นั่นแหละ แต่ก่อนเราจะไปหาว่า ทำนู่นทำนี่แล้วจะมีโอกาส % เท่าไรเราต้องรู้เรื่องถัดไปก่อน นั่นก็คือ...

---

## ปริภูมิตัวอย่าง (Sample Space)

> **นิยาม:** ปริภูมิตัวอย่าง (Sample Space) ของการทดลองสุ่มใดๆ คือ*เซต*ของผลลัพธ์ที่เป็นไปได้ทั้งหมดจากการทดลอง เขียนแทนด้วยสัญลักษณ์ $S$ และสมาชิกแต่ละตัวของปริภูมิตัวอย่าง เรียกว่า จุดตัวอย่าง (Sample Point)

ข้างต้น... หลังจากนี้ฉันจะใช้แค่คำว่า Sample Space นะ เหตุผลคงรู้ๆ กัน 😓

พอเราทำการทดลองแล้วอย่างที่เคยบอกไป มันจะได้ผลลัพธ์ทั้งผลเดียว กับหลายๆ ผลใช่ป่ะ (ที่เราจดไว้สวยๆ ตอนต้น) ไอตัวผลลัพธ์ที่ได้แต่ละตัวเนี่ยเราจะเรียกว่าจุดตัวอย่าง (Sample Point) ซึ่งตัวนี้เราว่าก็ไม่ได้สำคัญอะไรมากสักเท่าไร 😅

แต่ถ้าเราเอาไอผลลัพธ์ที่มันเกิดอ่ะ มาเขียนในรูปของ $S=\{$&laquo;ผลลัพธ์&raquo;$\}$
สิ่งที่เราได้ออกมา เราจะเรียกว่า ="Sample Space ของการทดลองสุ่ม"= ❤&#xFE0F;

อ่ะลองมาดูตัวอย่างกัน

**ตัวอย่างที่ 1:**

- การทดลอง: โยนเหรียญ 1 เหรียญ (โยนแล้วได้หน้าของเหรียญ)
- ผลลัพธ์ที่เกิดขึ้น: หัว, ก้อย
- $\therefore$ Sample Space ของการโยนเหรียญ 1 เหรียญคือ $S=\{$หัว$,$ก้อย$\}$

**ตัวอย่างที่ 2:**

- การทดลอง: ทอดลูกเต๋า 6 ด้าน 1 ลูก (ทอดแล้วได้ลูกเต๋าทอด เอ้ย ได้แต้มจากหน้าบนของลูกเต๋า)
- ผลลัพธ์ที่เกิดขึ้น: 1, 2, 3, 4, 5, 6
- $\therefore$ Sample Space ของการทอดลูกเต๋า 6 ด้าน 1 ลูกคือ $S=\{1,2,3,4,5,6\}$

**ตัวอย่างที่ 3:**

- การทดลอง: เล่นเกมจนกว่าจะชนะ (เล่นแล้วได้ผลแพ้ชนะ)
- ผลลัพธ์ที่เกิดขึ้น: ชนะ, แพ้-ชนะ, แพ้-แพ้-ชนะ, ...
- $\therefore$ Sample Space ของการเล่นเกมจนกว่าจะชนะคือ $S=\{$ชนะ$,$แพ้-ชนะ$,$แพ้-แพ้-ชนะ$,\dots\}$

**ตัวอย่างที่ 4:**

- การทดลอง: ยืนจับเวลารอรถหน้ามหาลัยฯ (จับเวลาแล้วได้เวลากว่าที่รถจะมาถึง)
- ผลลัพธ์ที่เกิดขึ้น: $[0,\infty)$ (ยืนรอแป๊บเดียวก็มี ยืนรอยันชาติหน้าก็มี)
- $\therefore$ Sample Space ของการยืนจับเวลารอรถหน้ามหาลัยฯ คือ $S=\{x|x\geq 0,x\in \mathbb R\}$

จากตัวอย่างที่ 1 กับ 2 เราจะเห็นว่า Sample Space ของสองตัวนี้จะง่ายๆ ออกมาเป็นตัวๆ แต่ในตัวอย่างที่ 3 กับ 4 เราจะพบว่า Sample Space มันเริ่มซับซ้อนขึ้น แถมยังเป็นเซตของช่วงได้อีก เราเลยบอกว่า ไอ Sample Space เนี่ยมันจะมีอยู่ 2 แบบ คือ:

1. Sample Space จำกัด: คือมัน=นับได้ ต่อให้เยอะแต่ถ้านับไหวก็คือนับได้= เช่นตัวอย่าง 1 กับ 2 นับได้เลยว่ามีกี่ตัว
2. Sample Space อนันต์: อ่ะถ้าตัวเนี้ยคือนับไม่ได้ _ยิ่งนับยิ่งเยอะ_ พวกเนี้ยมักจะคล้ายๆ กับตัวอย่างที่ 4 คือ=มีผลลัพธ์เป็นช่วงของจำนวนอะไรสักอย่างแล้วไม่มีลิมิต= แต่เพื่อความปลอดภัยยังไง recheck ก่อนนะว่ามันนับไหวป่าว (นับไหว &rarr; นับได้)

พอเรารู้แล้วว่าการทดลองสุ่มของเราจะให้ผลลัพธ์อะไรออกมาบ้าง เราก็จะเอาการทดลองของเรามาดัดแปลงเพื่อให้ได้สิ่งที่เราอยากได้ ซึ่งก็จะต้องพูดถึงเรื่อง...

---

## เหตุการณ์ (Event)

> **นิยาม:** เหตุการณ์ (Event) คือเซตย่อยของปริภูมิตัวอย่าง ซึ่งแบ่งเป็น:
>
> - เหตุการณ์อย่างง่าย มีสมาชิก 1 ตัว
> - เหตุการณ์ประสม มีสมาชิกมากกว่า 1 ตัว

เราอาจจะสังเกตว่า การทดลองสุ่มที่เรายกขึ้นมาแต่ละอันนั้นมันจะให้ Sample Space ออกมาแค่อย่างเดียว เหมือนกันเสมอๆ

แต่จริงๆ เราสามารถ modify ให้มันละเอียดขึ้นได้โดยการ=กำหนดเหตุการณ์=เพิ่มเติมลงไป ซึ่งเหตุการณ์เหล่านี้ก็จะให้ผลลัพธ์ออกมาเป็นเซตเหมือน Sample Space =ซึ่งอาจจะมีทุกตัวหรือบางตัวก็ได้= (อ้างอิงจากนิยามที่ว่า "*เป็นเซตย่อยของปริภูมิตัวอย่าง (Sample Space)*")

เดี๋ยวขอยกตัวอย่างการทดลองสุ่มขึ้นมาอันนึงก่อน

> **การทดลองสุ่ม:** โยนลูกเต๋า 6 ด้าน 1 ลูก
>
> - ผลลัพธ์ที่เกิดขึ้น: 1, 2, 3, 4, 5, 6
> - Sample Space ของการทอดลูกเต๋า 6 ด้าน 1 ลูกคือ $S=\{1,2,3,4,5,6\}$

**เดี๋ยวเราจะลองตั้งเหตุการณ์ขึ้นมา 3 ตัวคือ:**

1. **เหตุการณ์ A:** เมื่อทอดลูกเต๋าแล้วได้แต้มน้อยกว่า 7
2. **เหตุการณ์ B:** เมื่อทอดลูกเต๋าแล้วได้แต้มคี่
3. **เหตุการณ์ C:** เมื่อทอดลูกเต๋าแล้วได้ค่าที่น้อยที่สุด

เราจะเห็นว่า เหตุการณ์ 3 ตัวนี้จะเป็นตัวที่ส่งผลให้ผลลัพธ์เปลี่ยนไป (ผลลัพธ์เปลี่ยนนะ ไม่ใช่ Sample Space เปลี่ยน &mdash; Sample Space คือสิ่งที่เป็นไปได้*ทั้งหมด*) นั่นคือ:

- ผลลัพธ์ของเหตุการณ์ A คือ: 1, 2, 3, 4, 5, 6 ($A=\{1,2,3,4,5,6\}$)
- ผลลัพธ์ของเหตุการณ์ B คือ: 1, 3, 5 ($B=\{1,3,5\}$)
- ผลลัพธ์ของเหตุการณ์ C คือ: 1 ($C=\{1\}$)

จะเห็นว่าเหตุการณ์พวกนี้จะเป็นซับเซตของ Sample Space หมดเลย ($A\subset S,B\subset S,C\subset S$) ดังนั้นถ้าเหตุการณ์ของเธอมีตัวแปลกๆ ที่ไม่อยู่ใน Sample Space ล่ะก็... *เธอพลาดละ...* 😂

แน่นอนว่าเหตุการณ์ก็ยังแบ่งออกเป็น 2 ประเภท คือ:

1. เหตุการณ์อย่างง่าย: ก็คือ=มีสมาชิก 1 ตัว= เช่นเหตุการณ์ C ที่ยกตัวอย่างไป
2. เหตุการณ์ประสม: ตัวนี้จะ=มีสมาชิกมากกว่า 1 ตัว= เช่น เหตุการณ์ A กับ B ตามที่ยกตัวอย่างไปเช่นกัน

นอกจากนี้ เจ้าเหตุการณ์พวกเนี้ยมันก็เขียนเป็นเซตได้เหมือนกัน ดังนั้น =การดำเนินการระหว่างเซตจะทำให้เกิดเหตุการณ์ใหม่= ❤&#xFE0F; เช่น:

จับเอาเหตุการณ์ A มาอินเทอร์เซ็กต์กับ B ($A\cap B$) เราจะได้เหตุการณ์ "เมื่อทอดลูกเต๋าแล้วได้แต้มน้อยกว่า 7 *และ*ได้แต้มคี่"

นั่นคือเราจะได้ $\{1,2,3,4,5,6\}\cap\{1,3,5\}=\{1,3,5\}$ &mdash; ทาดาาา 🎉

หรือถ้าเราเอาเหตุการณ์ B มายูเนียนกับ C ($B\cup C$) เราก็จะได้เหตุการณ์ "เมื่อทอดลูกเต๋าแล้วได้แต้มคี่*หรือ*ได้ค่าที่น้อยที่สุด"

ก็จะได้เป็น $\{1,3,5\}\cup\{1\}=\{1,3,5\}$

จะเห็นว่าเราจะสามารถสร้างเหตุการณ์ใหม่ๆ ขึ้นได้เยอะเลย 😄

*แต่...*

บางเหตุการณ์เมื่อเราเอามาดำเนินการกันแล้ว =อาจจะได้เซตว่าง=ก็ได้นะ 🤔 เช่น:

> **กำหนดเหตุการณ์ D:** เมื่อทอดลูกเต๋าแล้วได้*แต้มคู่* (นั่นคือ $D=\{2,4,6\}$)

ถ้าเธอเอาเหตุการณ์ B มาอินเทอร์เซ็กต์กับ D ก็จะได้ว่า $B\cap D=\{1,3,5\}\cap\{2,4,6\}=\varnothing$

แน่นอนว่าเรารู้อยู่ละว่ายังไงลูกเต๋ามันจะเกิดหน้าคู่และคี่พร้อมกันไม่ได้แน่ๆ มันเลยให้ผลลัพธ์ออกมาเป็นเซตว่างหรือก็คือ =ไม่มีเหตุการณ์นั้นเกิดขึ้น=

เราจะเรียกเหตุการณ์ 2 เหตุการณ์ที่เอามาอินเทอร์เซ็กต์กันแล้วได้เซตว่างเนี้ยว่า ="เหตุการณ์ที่เกิดร่วมกันไม่ได้ (mutually exclusive)"= ❤&#xFE0F;

> **นิยาม:** ถ้าเหตุการณ์ A กับ B ไม่มีจุดตัวอย่างร่วมกัน นั่นคือ $A\cap B=\varnothing$ เรียก A กับ B ว่า เป็นเหตุการณ์ที่เกิดร่วมกันไม่ได้ (mutually exclusive)

ทั้งหมดที่เราได้พูดไปแล้วก็คือเรื่องของ "เหตุการณ์ (Event)" และสิ่งที่เกิดขึ้นได้จากเหตุการณ์ ในส่วนนี้อาจจะยืดยาวหน่อย ถ้าไม่เข้าใจลองเปิดหาตัวอย่างเพิ่มเติมได้เลยนะ 🔎

เอาเป็นว่า เราไปดูสรุปกันดีกว่า 😄

---

## สรุปเนื้อหา

- **การทดลอง (Experiment):**
  - ลองทำ &rarr; ได้ผลลัพธ์
  - 2 แบบ:
    1. รู้ผลแน่นอน: คำนวณ=หาค่าที่แน่นอนได้=
    2. สุ่ม: หาค่าแน่นอนไม่ได้ แต่=หาความน่าจะเป็นได้=
- **ปริภูมิตัวอย่าง (Sample Space):**
  - เซตของ=ผลลัพธ์ที่เป็นไปได้ทั้งหมด=
  - E.g.: ผลการสอบนักศึกษา 1 คน &rarr; $S=\{$ผ่าน$,$ไม่ผ่าน$\}$
  - 2 แบบ:
    1. จำกัด: นับได้ (=ต่อให้เยอะ ถ้านับได้ก็เป็น=)
    2. อนันต์: $\infty$ (มักอยู่บนช่วงจำนวนไม่มีลิมิต)
- **เหตุการณ์ (Event):**
  - เซตย่อยของ S
  - 2 ประเภท:
    1. ง่าย: มีตัวเดียว
    2. ประสม: มีหลายตัว
  - เนื่องจากเหตุการณ์แทนได้ด้วยเซต $\therefore$ =การดำเนินการระหว่างเซตจะเกิดเหตุการณ์ใหม่ขึ้น=
  - $A\cap B=\varnothing$ &rarr; เหตุการณ์เกิดร่วมกันไม่ได้ (Mutually Exclusive)

ก็จบลงไปแล้วสำหรับ EP1 เนอะ จริงๆ อยากจะเขียนทั้งบทที่ 1 ให้มันจบๆ ไปเลยแต่โอ้โหทำไมเราพิมพ์เยอะจัง 😂 เดี๋ยวเวลาว่างๆ จะมาพิมพ์ลงให้อีกน้า ฝากติดตามคอนเทนต์ด้วยเด้อ สวัสดีจ้า 🥰
