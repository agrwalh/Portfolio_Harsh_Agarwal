"use client";

import { useState, useRef, useEffect, type RefObject } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { answerQuestionsAboutMe } from '@/ai/flows/answer-questions-about-me';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AiAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Harsh's AI assistant. Feel free to ask me anything about his skills, projects, or experience.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollViewportRef.current) {
        scrollViewportRef.current.scrollTo({
          top: scrollViewportRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await answerQuestionsAboutMe({ question: input });
      const aiMessage: Message = { id: Date.now() + 1, text: response.answer, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = { id: Date.now() + 1, text: "Sorry, I encountered an error. Please try again.", sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-8 w-8" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline flex items-center gap-2">
            <Bot />
            AI Assistant
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex flex-col h-full overflow-hidden">
            <ScrollArea className="flex-grow p-4 pr-6 -mx-4" viewportRef={scrollViewportRef}>
            <div className="space-y-6">
                {messages.map((message) => (
                <div
                    key={message.id}
                    className={cn(
                    'flex items-start gap-3',
                    message.sender === 'user' && 'justify-end'
                    )}
                >
                    {message.sender === 'ai' && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                    )}
                    <div
                    className={cn(
                        'rounded-lg px-4 py-2 max-w-[80%] text-sm break-words',
                        message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                    >
                    {message.text}
                    </div>
                    {message.sender === 'user' && (
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                    )}
                </div>
                ))}
                {isLoading && (
                <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-3 bg-muted">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="h-2 w-2 rounded-full bg-foreground animate-pulse delay-0"></span>
                        <span className="h-2 w-2 rounded-full bg-foreground animate-pulse delay-150"></span>
                        <span className="h-2 w-2 rounded-full bg-foreground animate-pulse delay-300"></span>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </ScrollArea>
            <div className="py-4 border-t">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
                </Button>
            </form>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AiAssistant;
