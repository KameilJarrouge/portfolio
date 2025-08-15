import React from "react";
import Modal from "./Modal";
import ImageCarousel from "../ImageCarousel";

function PersonalInfoModal({ uniqueName = "", isOpen, setIsOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      uniqueName={"personal-information-" + uniqueName}
    >
      <div className="max-w-[80vw] max-h-[80vh] w-fit overflow-auto p-4 pb-6 ">
        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            About me
          </h3>
          <p className="text-gray-700 dark:text-gray-300  max-w-[90ch]">
            I grew up in a small village in western Syria, surrounded by hills,
            olive trees, and a close-knit community. While I'm not deeply
            religious, my upbringing in a Christian household taught me the
            value of patience, craftsmanship, and quiet resilience — qualities I
            carry into my work as an engineer.
          </p>
        </section>
        <section className="mb-6 max-w-[90ch] mt-4">
          <ImageCarousel
            images={[
              {
                src: "/avatar.jpg",
                title: "My village in western Syria",
                description:
                  "Where I grew up, surrounded by olive trees and hills.",
              },
              {
                src: "/avatar.jpg",
                title: "Where I grew up",
                description:
                  "Where I grew up, surrounded by olive trees and hills.",
              },
            ]}
          />
        </section>

        <section>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-4 space-y-1">
            <li>I build tools that last — even if they’re simple.</li>
            <li>
              I care deeply about making tech accessible to non-technical users.
            </li>
            <li>I believe humility and confidence can coexist.</li>
            <li>
              I’m learning German to better connect with future teams and
              communities.
            </li>
          </ul>
        </section>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          If you're curious about my background or want to chat beyond the code,
          I'm always open to a thoughtful conversation.
        </p>
      </div>
    </Modal>
  );
}

export default PersonalInfoModal;
